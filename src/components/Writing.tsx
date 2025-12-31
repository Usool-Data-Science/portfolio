import { POSTS } from "@/data/posts";
import PostCard from "./PostCard";

const Writing = () => {
  return (
    <section id="writing" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Writing
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
              Technical articles
            </h3>
            <p className="text-lg text-muted-foreground">
              Thoughts on backend architecture, scaling challenges, and lessons
              learned from building production systems.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {POSTS.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                datetime={post.datetime}
                link={post.link}
                thumbnail={post.thumbnail}
                headline={post.headline}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writing;
