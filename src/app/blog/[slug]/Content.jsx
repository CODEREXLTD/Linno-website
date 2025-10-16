'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TeamCard from '@/components/common/TeamCard';
import HomeCTA from '@/app/components/HomeCTA';

const Content = ({slug}) => {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        // Grab all h2 and h3 headings for TOC
        const elements = Array.from(document.querySelectorAll("h2, h3"));
        const mapped = elements.map((el) => ({
            id: el.innerText.replace(/\s+/g, "-").toLowerCase(),
            text: el.innerText,
            level: el.tagName,
        }));

        // Add IDs to headings if not already present
        mapped.forEach((h) => {
            const el = document.getElementById(h.id);
            if (!el) {
                document
                    .querySelector(`[data-text='${h.text}']`)
                    ?.setAttribute("id", h.id);
            }
        });

        setHeadings(mapped);
    }, []);
    const formattedToday = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'Asia/Dhaka'
    }).format(new Date());

    return (
        <>
            <div className="min-h-screen">
                {/* Header */}
                <Header />

                <main className="w-full">
                    <section className="w-full py-[63px] sm:py-[95px] lg:py-[126px] bg-white">
                        <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                            <div className='space-y-4'>
                                <p className='font-sora text-[#0F0E55] text-[14px] md:text-[20px]'>
                                    Wordpress {formattedToday}
                                </p>

                                <Link href="/blog/wordcamp-dhaka-2019">
                                    <h3 className='font-sora text-[#0B0B35] text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-tight'>
                                        WordCamp Dhaka 2019 - First WordCamp in Bangladesh
                                    </h3>
                                </Link>

                                <div className='mx-auto'>
                                    <Link href="/blog/wordcamp-dhaka-2019">
                                        <Image
                                            src="/images/wordpress-wordcamp.png"
                                            alt="WordCamp Dhaka 2019"
                                            width={400}
                                            height={300}
                                            className="w-full h-auto"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="w-full pb-[63px] sm:pb-[95px] lg:pb-[126px] bg-white">
                        <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                <aside className="md:col-span-1 sticky top-20 h-fit p-20 hidden sm:block">
                                    <h4 className="font-sora text-lg font-semibold mb-3">Table of Contents</h4>
                                    <ul className="space-y-4 text-[#51515F] text-base">
                                        {headings.map((h, i) => (
                                            <li
                                                key={i}
                                                className={`pl-${h.level === "H3" ? "4" : "0"} text-sm hover:text-blue-600 text-[#585A65] leading-6`}
                                            >
                                                <Link href={`#${h.id}`}>{h.text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </aside>


                                <div className='col-span-2'>
                                    <p className='text-[#51515F] font-sora text-xl leading-10'>
                                        WordPress is a powerful CMS, used to build over 27% of all websites on the internet. It offers over 3000 free themes and over 8000 premium themes, that are GPL licensed, for developing websites.
                                        While creating a website, you may choose to among brilliant themes. However, you should get familiar with how to create a child theme.
                                        <br /><br />
                                        Let me explain why.
                                        <br /><br />
                                        All WordPress themes release updates every now and then to fix bugs and add new features. This is good in the sense that your theme is getting more and more secure with fewer bugs and good new features.
                                        However, if you have made any customization to the theme, then you will face issues.
                                        <br /><br />
                                        Basically, when updating a theme, all the core files of the theme are replaced with new updated files.
                                        Hence your theme will lose all the customizations that you implemented. Also, there is no way to get them back (unless you kept backup) once updated.
                                        <br /><br />
                                        You might think you can simply not update your theme to avoid this problem. But this is not a good practice. Over time more and more bugs will be noticed while becoming backdated and eventually cease to be responsive.
                                        <br /><br />
                                        But you don't have to go through all that. WordPress offers a solution through 'Child Theme.'
                                    </p>

                                    <h3 className='text-[#51515F] font-sora text-2x md:text-3xl my-4 leading-10'>
                                        What Is A Child Theme?
                                    </h3>

                                    <Image
                                        src="/images/image-8.png"
                                        alt="What Is A Child Theme?"
                                        width={400}
                                        height={300}
                                        className="w-full h-auto py-8 rounded-md"
                                    />

                                    <p className='text-[#51515F] font-sora text-xl leading-10 mb-8'>
                                        A child theme is basically an extension of your main theme where you can implement all your customizations without altering any core files of the theme.
                                        <br />
                                        This means that even after you update your main (parent) theme, your customizations will still remain on your child theme.
                                        <br />
                                        The way it works is that only the files that you intend to customize, are copied (or created) into your child theme. You can implement your changes there.
                                        <br />
                                        When running your site with your child theme activated, the core features of the themes will be loaded from the main (parent) theme files and the customizations will be loaded from the child theme.
                                    </p>

                                    <TeamCard
                                        name="Fatema-Tuz-Zohra Nabila"
                                        position="Product marketing manager"
                                        imgSrc="/images/nabila.jpeg"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <HomeCTA />
                </main>

                <Footer />
            </div>
        </>
    )
};

export default Content;