import { ArrowUpRight } from "lucide-react";

interface PostCardProps {
  title: string;
  datetime: string;
  link: string;
  thumbnail: string;
  headline: string;
}

const PostCard = ({ title, datetime, link, headline }: PostCardProps) => {
  const date = new Date(datetime);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-card rounded-xl border border-border transition-all duration-300 hover:shadow-card-hover hover:border-primary/20"
    >
      <article className="space-y-3">
        {/* Date */}
        <time className="text-sm text-muted-foreground">{formattedDate}</time>

        {/* Title with arrow */}
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-start gap-2">
          {title}
          <ArrowUpRight className="w-5 h-5 flex-shrink-0 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
        </h3>

        {/* Headline */}
        <p className="text-muted-foreground leading-relaxed line-clamp-2">
          {headline}
        </p>

        {/* Read more indicator */}
        <div className="pt-2">
          <span className="text-sm font-medium text-primary group-hover:underline">
            Read article
          </span>
        </div>
      </article>
    </a>
  );
};

export default PostCard;
