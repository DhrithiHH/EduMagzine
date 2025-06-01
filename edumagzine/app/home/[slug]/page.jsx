'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function fetchArticle() {
      setLoading(true);
      try {
        const res = await fetch('/data/data.json');
        if (!res.ok) throw new Error('Failed to fetch articles');
        const data = await res.json();
        const foundArticle = data.articles.find((a) => a.slug === slug);
        setArticle(foundArticle ?? null);

        if (foundArticle) {
          const related = data.articles
            .filter(
              (a) =>
                a.category === foundArticle.category && a.slug !== foundArticle.slug
            )
            .slice(0, 5);
          setRelatedArticles(related);
        }
      } catch (error) {
        console.error(error);
        setArticle(null);
        setRelatedArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [slug]);

  if (loading) {
    return <div className="p-10 max-w-3xl mx-auto">Loading article...</div>;
  }

  if (!article) {
    return (
      <div className="p-10 text-red-500 max-w-3xl mx-auto">
        Article not found for slug: <strong>{slug}</strong>
      </div>
    );
  }

  return (
    <>
      <div className="w-[90vw] mx-auto px-4 py-10">
        {/* SEO */}
        <Head>
          <title>{article.title} | Knowledge Bites</title>
          <meta
            name="description"
            content={article.content?.[0]?.slice(0, 150) || 'Knowledge article'}
          />
        </Head>

        {/* Breadcrumb */}
        <nav className="text-sm mb-4 text-gray-500">
          <Link href="/">Home</Link> / <Link href="/home">News</Link> /{' '}
          <span className="text-black">{article.title}</span>
        </nav>

        <h1 className="text-4xl text-black font-bold mb-6 lg:w-1/2">{article.title}</h1>
        <p className='text-xs font-bold mb-3 text-gray-700'>{new Date(article.date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  }).toUpperCase()}</p>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Content */}
          <div className="lg:w-1/2 space-y-10 text-gray-500 leading-relaxed">
            {article.content.map((paragraph, idx) => {
              const markdownLinkRegex = /\[(.*?)\]\((.*?)\)/;
              const match = paragraph.match(markdownLinkRegex);

              if (match) {
                const [full, text, href] = match;
                const parts = paragraph.split(full);
                return (
                  <p key={idx} className="text-justify text-sm">
                    {parts[0]}
                    <a
                      href={href}
                      target="_blank"
                      className="text-blue-600 underline"
                      rel="noreferrer"
                    >
                      {text}
                    </a>
                    {parts[1]}
                  </p>
                );
              }

              if (paragraph.startsWith('“_')) {
                return (
                  <blockquote
                    key={idx}
                    className="italic border-l-4 border-gray-400 pl-4 text-gray-700 text-sm"
                  >
                    {paragraph}
                  </blockquote>
                );
              }

              return (
                <p key={idx} className="text-sm text-justify">
                  {paragraph}
                </p>
              );
            })}

            {/* Author */}
            <div className="mt-10 text-right text-xs italic text-gray-500">
              — {article.author || 'Anonymous'}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {/* Main Image */}
            {article.image ? (
              <img
                src={article.image}
                alt={article.title}
                className="rounded-lg shadow-lg w-full max-h-[300px] object-cover"
              />
            ) : (
              <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400">
                No image available
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Articles outside the layout */}
      <div className="w-[90vw] mx-auto px-4 py-6 border-t mt-10 max-w-7xl">
        <h2 className="text-xl font-semibold mb-4 text-black">Related Articles</h2>
        <div className="flex gap-6 overflow-x-auto custom-scroll">
          {relatedArticles.length > 0 ? (
            relatedArticles.map((ra, idx) => (
              <div key={idx} className="w-[25vw] flex-shrink-0 border-b pb-4">
                <p className="text-xs  mb-1">
                  {new Date(ra.date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  }).toUpperCase()}
                </p>
                <img
                  src={ra.image}
                  alt={ra.title}
                  className="w-full aspect-[3/2] object-cover"
                  style={{ borderRadius: 0 }}
                />
                <p className="font-medium text-sm mt-2 mb-1 text-black">{ra.title}</p>
                <Link
                  href={`/article/${ra.slug}`}
                  className="text-blue-600 text-xs underline"
                >
                  Learn More
                </Link>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No related articles found.</p>
          )}
        </div>
      </div>
    </>
  );
}
