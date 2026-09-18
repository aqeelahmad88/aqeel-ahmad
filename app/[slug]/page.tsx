import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectDetailView from "@/components/ProjectDetailView";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project Not Found | Aqeel Ahmad",
    };
  }

  const url = `https://aqeel-ahmad.info/${project.slug}`;
  const image = `https://aqeel-ahmad.info/${project.imgSrc}`;

  return {
    title: project.title,
    description: project.description,
    keywords: project.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url,
      type: "article",
      images: [
        {
          url: image,
          alt: project.shortTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [image],
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.shortTitle} - Software Engineering Case Study`,
    headline: project.headline,
    description: project.description,
    author: {
      "@type": "Person",
      name: "Aqeel Ahmad",
      url: "https://aqeel-ahmad.info/#person",
    },
    creator: {
      "@type": "Person",
      name: "Aqeel Ahmad",
    },
    genre: project.category,
    keywords: project.technologies.join(", "),
    image: `https://aqeel-ahmad.info/${project.imgSrc}`,
    url: `https://aqeel-ahmad.info/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetailView project={project} />
    </>
  );
}
