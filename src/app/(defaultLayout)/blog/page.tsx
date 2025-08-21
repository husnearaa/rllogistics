import BlogContent from "@/components/mainLayout/blog/BlogContent";
import { PageHeader } from "@/components/shared/PageHeader";

const Blog = () => {
  return (
    <div>
      <PageHeader
        title="Our Blog"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Blog" }]}
      />
      <main className="container mx-auto py-8 px-4">
        <BlogContent />
      </main>
    </div>
  );
};

export default Blog;
