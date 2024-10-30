import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Projects from './components/Projects'
import './index.css'
import { useEffect, useState } from 'react'
import { POSTS } from './data/posts'
import { PROJECTS } from './data/projects'

function App() {
  const [searchPost, setSearchPost] = useState('');
  const [searchProject, setSearchProject] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [projectResult, setProjectResult] = useState([]);

  function sortByDate(arr, dateProp, descending = false) {
    return arr.sort((a, b) => {
      const a_date = new Date(a[dateProp]);
      const b_date = new Date(b[dateProp]);

      return descending ? b_date - a_date : a_date - b_date;
    })
  }

  useEffect(() => {
    const result = POSTS.filter(post => (
      (post.title.toLowerCase()).includes(searchPost.toLowerCase()) ||
      (post.headline.toLowerCase()).includes(searchPost.toLowerCase())
    ));
    sortByDate(result, "datetime", true);
    setSearchResult(result.length ? result :
      searchPost.length ? [] : POSTS);
  }, [searchPost])

  useEffect(() => {
    const result = PROJECTS.filter(project => (
      (project.stack_string.toLowerCase()).includes(searchProject.toLowerCase())
    ));
    sortByDate(result, "datetime", true)
    setProjectResult(result.length ? result :
      searchProject.length ? [] : PROJECTS);
  }, [searchProject])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blogs' element={<Blogs
            searchPost={searchPost}
            setSearchPost={setSearchPost}
            blogPosts={searchResult}
          />} />
          <Route path='projects' element={<Projects
            searchProject={searchProject}
            setSearchProject={setSearchProject}
            projects={projectResult}
          />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
