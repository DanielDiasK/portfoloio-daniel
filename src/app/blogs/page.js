import React from "react";
import { blogs , seo } from "../../data/data";
import Link from "next/link";

export const metadata = {
    title: `Blog | ${seo.title}`,
    description: "Leia artigos, tutoriais e insights sobre desenvolvimento web, Next.js e programação.",
    keywords: "blog, desenvolvimento web, Next.js, programação, tutoriais"
};

function page() {
    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4">
            <main className="flex flex-col gap-2">
                <h1 className="text-xl font-medium before:content-['>'] before:mr-1">Blog</h1>
                <div className="flex flex-col gap-4 p-1">
                    {blogs.length > 0 ? (
                        blogs.map((blog, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between gap-5"
                            >
                                <Link href={blog.link}>
                                    <h2 className="cursor-pointer hover:underline">
                                        {blog.title}
                                    </h2>
                                </Link>
                                <p className="text-xs">{blog.date}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center mt-10">Nenhum blog disponível.</p>
                    )}
                </div>
            </main>
        </div>
    );
}

export default page;
