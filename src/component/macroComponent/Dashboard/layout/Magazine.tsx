import Image from "next/image";
import Link from "next/link";
import { useContext, type FC } from "react";
import { AuthorBlogArticleCard } from "~/component/card";
import { Pen } from "~/svgs";
import { type DataType } from "~/types";
import { C, type ContextValue } from "~/utils/context";

const Magazine: FC<{
  data: DataType[] | undefined;
  isLoading: boolean;
  author: {
    name: string;
    profile: string;
    username: string;
    handle: {
      about: string;
    };
  };
}> = ({ data, isLoading, author }) => {
  const { user, theme } = useContext(C) as ContextValue;

  return (
    <>
      <div className="w-full border-b border-border-light bg-light-bg dark:border-border dark:bg-black">
        {isLoading ? (
          <div className="border-light h-[50%] min-h-[24rem] rounded-md border border-border-light bg-gray-200 shadow-md dark:border-border dark:bg-primary-light"></div>
        ) : data && data.length > 0 ? (
          <div className="author-blog-grid mx-auto max-w-[1300px] px-4 py-8">
            <AuthorBlogArticleCard type="main" article={data[0] as DataType} />
            {data.length === 1 ? (
              <>
                {data?.slice(1, 3).map((article) => (
                  <div className="child-block" key={article.id}>
                    <AuthorBlogArticleCard type="group" article={article} />
                  </div>
                ))}
                <div className="child-block hidden h-[18rem] rounded-md border border-border-light bg-gray-200 shadow-md dark:border-border dark:bg-primary-light md:block"></div>
                <div className="child-block hidden h-[18rem] rounded-md border border-border-light bg-gray-200 shadow-md dark:border-border dark:bg-primary-light md:block"></div>
              </>
            ) : data.length === 2 ? (
              <>
                {data?.slice(1, 3).map((article) => (
                  <div className="child-block" key={article.id}>
                    <AuthorBlogArticleCard type="group" article={article} />
                  </div>
                ))}
                <div className="child-block hidden h-[18rem] rounded-md border border-border-light bg-gray-200 shadow-md dark:border-border dark:bg-primary-light md:block"></div>
              </>
            ) : (
              <>
                {data?.slice(1, 3).map((article) => (
                  <div className="child-block" key={article.id}>
                    <AuthorBlogArticleCard type="group" article={article} />
                  </div>
                ))}
              </>
            )}
          </div>
        ) : (
          <div className="w-full bg-light-bg px-4 py-8 dark:bg-primary">
            <div className="mx-auto w-full max-w-[35rem]">
              <Image
                src={
                  theme === "light"
                    ? "/imagePlaceholder-light.avif"
                    : "/imagePlaceholder-dark.avif"
                }
                alt="No Articles Uploaded By the Author"
                width={800}
                height={800}
                className="mx-auto w-full object-cover"
              />

              <div className="flex flex-col justify-center">
                <h1 className="mb-6 text-center text-2xl font-medium text-gray-700 dark:text-text-secondary">
                  {user?.user.username === author.username ? "Your" : "Author"}{" "}
                  blog is empty!{" "}
                  {user?.user.username === author.username
                    ? "Write your first article"
                    : ""}
                </h1>

                {user?.user.username === author.username && (
                  <Link href="/new" className="mx-auto block">
                    <button className="btn-filled">
                      <span className="flex items-center gap-2">
                        <Pen className="h-5 w-5 fill-none stroke-gray-100" />
                        <span className="tracking-wider">Write an article</span>
                      </span>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {data
        ? data?.length > 2 && (
            <div className="border-b border-border-light bg-light-bg px-4 py-16 dark:border-border dark:bg-primary">
              <div className="mx-auto flex max-w-[1300px] items-center justify-center">
                <div className="flex w-full flex-wrap gap-6">
                  {data?.slice(3, data.length).map((article) => (
                    <AuthorBlogArticleCard
                      key={article.id}
                      type="non-grid"
                      width="w-full md:w-[calc(100%/2-1rem)] lg:w-[calc(100%/3-1rem)]"
                      article={article}
                    />
                  ))}
                </div>
              </div>
            </div>
          )
        : null}
      <div className="border-t border-border-light bg-light-bg dark:border-border dark:bg-primary">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-center px-4 py-16">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={author.profile || ""}
              width={120}
              height={120}
              alt="User Profile"
              className="h-18 w-18 rounded-full object-cover"
            />
            <h1 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-text-secondary">
              {author.name}
            </h1>
            <p className="text-base text-gray-500 dark:text-text-primary">
              {author.handle.about || "No bio added yet!"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Magazine;
