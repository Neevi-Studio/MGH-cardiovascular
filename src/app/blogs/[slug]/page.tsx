import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { blogs } from "./data";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

function Blog({ params }: { params: { slug: string } }) {
  const data = blogs.filter((blog) => blog?.slug === params.slug)?.[0];

  return (
    <div className="relative mx-auto max-w-screen-xl space-y-16 p-5 sm:p-8 md:p-12">
      {data.image ? (
        <Image
          src={`/blogs/${data.image}`}
          width={650}
          className="mx-auto mt-8 w-full max-w-screen-lg overflow-hidden rounded-xl object-cover object-center"
          height={450}
          alt="img"
        />
      ) : (
        <HeroSection />
      )}

      <div className="mx-auto max-w-screen-md">
        <div className="flex flex-col justify-between rounded-b bg-white leading-normal lg:rounded-b-none lg:rounded-r">
          <div>
            <div className="mb-2 flex flex-row flex-wrap">
              {data.hashtags.map((hashtag, index) => (
                <p
                  key={index}
                  className="hover:text-gray-dark text-xs font-medium uppercase text-primary transition duration-500 ease-in-out"
                >
                  {hashtag}
                  {index !== data.hashtags.length - 1 && (
                    <span className="text-black whitespace-break-spaces">, </span>
                  )}
                </p>
              ))}
            </div>

            <h1 className="text-gray-dark mb-2 text-2xl font-bold md:text-3xl">
              {data.title}
            </h1>
          </div>

          {/*  */}

          <p className="my-5 whitespace-pre-line text-base">{data.content}</p>

          {/*  */}

          {data?.subHeadings.map((subHeading, index) => (
            <div key={index}>
              <h2 className="my-5 text-xl font-bold md:text-2xl">
                {subHeading.title}
              </h2>
              <p className="my-5 whitespace-pre-line text-base">
                {subHeading.content}
              </p>
            </div>
          ))}

          {/*  */}

          <blockquote className="my-5 border-l-4 p-5 text-base italic leading-8 text-primary">
            {data.blockquote}
          </blockquote>

          {/*  */}

          <p className="my-5 whitespace-pre-line text-base">{data.content2}</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
