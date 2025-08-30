import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/common/Header';
import EditText from '@/components/ui/EditText';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRelatedPosts } from '@/data/blogData';
import '@/styles/blog.css';

// Blog content data - in a real app, this would come from a CMS or database
const blogContent = {
  'wordcamp-dhaka-2019': `
    <p>WordCamp Dhaka 2019 was a historic event as it marked the first official WordCamp in Bangladesh. This groundbreaking event brought together WordPress enthusiasts, developers, designers, and business owners from across the country and beyond.</p>
    
    <h2>What is WordCamp?</h2>
    <p>WordCamp is a conference that focuses on everything WordPress. WordCamps are informal, community-organized events that are put together by WordPress users like you. Everyone from casual users to core contributors participate, share ideas, and get to know each other.</p>
    
    <h2>The Historic Moment</h2>
    <p>The event was held at a prestigious venue in Dhaka and attracted over 200 participants. It was a day filled with learning, networking, and celebrating the WordPress community in Bangladesh.</p>
    
    <h2>Key Highlights</h2>
    <ul>
      <li>Over 200 attendees from Bangladesh and neighboring countries</li>
      <li>15+ speakers covering various WordPress topics</li>
      <li>Workshops on WordPress development and design</li>
      <li>Networking opportunities with like-minded individuals</li>
      <li>Local vendor showcase</li>
    </ul>
    
    <h2>Impact on the Bangladesh WordPress Community</h2>
    <p>This event was a catalyst for the growth of the WordPress community in Bangladesh. It inspired many developers and business owners to contribute more actively to the WordPress ecosystem.</p>
    
    <p>The success of WordCamp Dhaka 2019 paved the way for future WordPress events in the region and helped establish Bangladesh as an important player in the global WordPress community.</p>
  `,
  'effective-delegation': `
    <p>Effective delegation is a crucial skill for any leader or manager. It not only helps you manage your workload but also empowers your team members and helps them grow professionally.</p>
    
    <h2>1. Choose the Right Person</h2>
    <p>Select team members based on their skills, experience, and availability. Consider their current workload and development goals.</p>
    
    <h2>2. Define Clear Expectations</h2>
    <p>Be specific about what needs to be accomplished, the desired outcome, and the deadline. Avoid ambiguity.</p>
    
    <h2>3. Provide Necessary Resources</h2>
    <p>Ensure the person has access to all the tools, information, and resources needed to complete the task successfully.</p>
    
    <h2>4. Set Clear Deadlines</h2>
    <p>Establish realistic timelines and milestones. This helps track progress and ensures timely completion.</p>
    
    <h2>5. Grant Appropriate Authority</h2>
    <p>Give the person the authority needed to make decisions and take actions necessary to complete the task.</p>
    
    <h2>6. Establish Check-in Points</h2>
    <p>Schedule regular check-ins to monitor progress, provide guidance, and address any issues that arise.</p>
    
    <h2>7. Avoid Micromanaging</h2>
    <p>Trust your team members to do their job. Resist the urge to constantly monitor or intervene unless necessary.</p>
    
    <h2>8. Provide Feedback and Recognition</h2>
    <p>Once the task is completed, provide constructive feedback and recognize good work. This helps with future development.</p>
  `,
  'wordpress-custom-user-roles': `
    <p>WordPress comes with several predefined user roles, but sometimes you need to create custom user roles with specific capabilities to meet your website's unique requirements.</p>
    
    <h2>Method 1: Using a Plugin</h2>
    <p>The easiest way to create custom user roles is by using a plugin like "User Role Editor" or "Members".</p>
    
    <h3>Steps:</h3>
    <ol>
      <li>Install and activate the User Role Editor plugin</li>
      <li>Go to Users > User Role Editor in your WordPress admin</li>
      <li>Click "Add Role" to create a new role</li>
      <li>Give your role a name and select capabilities</li>
      <li>Save the new role</li>
    </ol>
    
    <h2>Method 2: Using Code</h2>
    <p>For more control, you can create custom user roles programmatically using WordPress functions.</p>
    
    <h3>Example Code:</h3>
    <pre><code>
function add_custom_user_role() {
    add_role(
        'custom_role',
        'Custom Role Name',
        array(
            'read' => true,
            'edit_posts' => true,
            'delete_posts' => false,
        )
    );
}
add_action('init', 'add_custom_user_role');
    </code></pre>
    
    <h2>Best Practices</h2>
    <ul>
      <li>Always follow the principle of least privilege</li>
      <li>Document your custom roles and their purposes</li>
      <li>Test thoroughly before implementing on production</li>
      <li>Consider using capabilities instead of roles when possible</li>
    </ul>
  `
};

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = blogContent[slug] || '<p>Content coming soon...</p>';
  const relatedPosts = getRelatedPosts(slug, post.category, 3);

  return (
    <div className="w-full bg-[#ffffff] relative">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img_frame_1171278179.png"
          alt="Background"
          width={1920}
          height={2718}
          className="w-full h-auto object-cover"
        />
        <Image
          src="/images/img_group_1171278158.png"
          alt="Background overlay"
          width={1920}
          height={1396}
          className="w-full h-auto object-cover absolute top-[456px] left-0"
        />
      </div>

      {/* Decorative Elements */}
      <Image
        src="/images/img_ellipse_1447.png"
        alt="Decorative element"
        width={350}
        height={712}
        className="absolute top-[3956px] left-0 w-[16%] h-auto z-10"
      />

      {/* Main Content */}
      <div className="relative z-20 w-full">
        {/* Vertical Lines */}
        <div className="absolute left-[52px] top-0 w-[1px] h-[11722px] bg-[#0000000f]"></div>
        <div className="absolute right-[209px] top-0 w-[1px] h-[11722px] bg-[#0000000f]"></div>

        {/* Content Container */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="pt-[18px] pb-[18px] mb-[10px]">
            <Header />
          </div>

          {/* Back to Blog Link */}
          <div className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center text-[#3433fe] hover:text-[#0e0e54] transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <div className="flex flex-row justify-start items-center gap-[10px] mb-6">
                <div className="w-[2px] h-[36px] bg-[#3433fe]"></div>
                <span className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[17px] sm:leading-[19px] lg:leading-[22px] tracking-[1.4px] sm:tracking-[1.6px] lg:tracking-[1.8px] uppercase text-[#0f0e55] ml-[10px]">
                  {post.category}
                </span>
                <span className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[17px] sm:leading-[19px] lg:leading-[22px] tracking-[1.4px] sm:tracking-[1.6px] lg:tracking-[1.8px] uppercase text-[#0f0e55] ml-[12px]">
                  {post.date}
                </span>
                <span className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[17px] sm:leading-[19px] lg:leading-[22px] tracking-[1.4px] sm:tracking-[1.6px] lg:tracking-[1.8px] uppercase text-[#787878] ml-[12px]">
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[38px] sm:leading-[50px] lg:leading-[62px] text-[#0b0a3d] mb-8">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-[16px] text-[#787878]">By {post.author}</span>
              </div>

              <div className="relative overflow-hidden rounded-[16px] mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-[16px]"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="blog-content mb-16">
              <div 
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>

            {/* Social Sharing */}
            <div className="border-t border-b border-[#e5e5e5] py-8 mb-12">
              <div className="flex items-center justify-between">
                <span className="text-[18px] font-semibold text-[#0b0a3d]">Share this article</span>
                <div className="flex items-center gap-4">
                  <button className="flex items-center justify-center w-10 h-10 bg-[#3433fe] text-white rounded-full hover:bg-[#0e0e54] transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 bg-[#3433fe] text-white rounded-full hover:bg-[#0e0e54] transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 bg-[#3433fe] text-white rounded-full hover:bg-[#0e0e54] transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <section className="mb-16">
              <h2 className="text-[28px] sm:text-[36px] font-bold leading-[34px] sm:leading-[43px] text-[#0b0a3d] mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.length > 0 ? relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <article className="bg-[#ffffff] rounded-[14px] p-[10px] flex flex-col gap-[20px] hover:shadow-lg transition-shadow duration-300 group">
                      <div className="relative overflow-hidden rounded-[14px]">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          width={300}
                          height={200}
                          className="w-full h-auto rounded-[14px] group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex flex-row justify-start items-center gap-[10px]">
                          <div className="w-[1px] h-[18px] bg-[#3433fe]"></div>
                          <div className="flex flex-row justify-start items-center gap-[12px] px-[10px]">
                            <span className="text-[12px] font-normal leading-[14px] tracking-[0.7px] uppercase text-[#787878]">
                              {relatedPost.category}
                            </span>
                            <span className="text-[12px] font-normal leading-[14px] tracking-[0.7px] uppercase text-[#787878]">
                              {relatedPost.date}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-[18px] font-bold leading-[22px] text-[#0b0a3d] group-hover:text-[#3433fe] transition-colors duration-200 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                )) : (
                  <p className="text-[16px] text-[#787878] col-span-3 text-center">No related posts found.</p>
                )}
              </div>
            </section>
          </article>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-[#ffffff] pt-[38px] pr-[38px] pb-[38px] pl-[38px] mt-[100px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-16 mt-[34px]">
            {/* Left Section - Logo and Contact */}
            <div className="w-full lg:w-[18%] flex flex-col gap-[38px] justify-start items-center self-center">
              <div className="flex flex-col gap-[38px] justify-start items-center">
                <div className="flex flex-row justify-center items-center gap-[10px]">
                  <Image
                    src="/images/img_path.svg"
                    alt="Logo"
                    width={44}
                    height={44}
                    className="w-[44px] h-[44px]"
                  />
                  <div className="flex flex-row justify-center items-center gap-[8px] self-end">
                    <Image
                      src="/images/img_path_gray_900.svg"
                      alt="Logo part"
                      width={24}
                      height={38}
                      className="w-auto h-[38px]"
                    />
                    <div className="w-[8px] h-[38px] bg-[#0b0b35] rounded-[4px] ml-[8px]"></div>
                    <Image
                      src="/images/img_path_gray_900_38x38.svg"
                      alt="Logo part"
                      width={38}
                      height={38}
                      className="w-[38px] h-[38px] ml-[8px]"
                    />
                    <Image
                      src="/images/img_path_gray_900_38x38.svg"
                      alt="Logo part"
                      width={38}
                      height={38}
                      className="w-[38px] h-[38px] ml-[8px]"
                    />
                    <Image
                      src="/images/img_compound_path.svg"
                      alt="Logo part"
                      width={38}
                      height={38}
                      className="w-[38px] h-[38px] ml-[8px]"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full">
                  <span className="text-[15px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-normal leading-[18px] sm:leading-[24px] md:leading-[30px] lg:leading-[36px] text-[#0b0b35] underline">
                    enquiry@linno.io
                  </span>
                </div>
                <EditText
                  placeholder="Contact Us"
                  className="w-full bg-[#3433fe] text-[#ffffff] text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[14px] sm:leading-[19px] md:leading-[24px] lg:leading-[29px] rounded-[24px] pt-[8px] pr-[46px] pb-[8px] pl-[16px] gap-[16px]"
                  onChange={() => {}}
                  rightImage={{
                    src: "/images/img_arrow_10.svg",
                    width: 30,
                    height: 16
                  }}
                />
              </div>
            </div>
            {/* Right Section - Links and Social */}
            <div className="flex-1 flex flex-row justify-end items-center">
              <div className="flex flex-row justify-between items-start w-[38%] gap-8">
                <div className="flex flex-col gap-[22px] justify-start items-start w-[16%]">
                  <span className="text-[9px] sm:text-[12px] md:text-[15px] lg:text-[18px] font-bold leading-[11px] sm:leading-[15px] md:leading-[18px] lg:leading-[22px] text-[#0b0b35]">
                    Quick Links
                  </span>
                  <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-normal leading-[18px] sm:leading-[24px] md:leading-[30px] lg:leading-[36px] text-[#51515f]">
                    About Us<br />Products<br />Showcase<br />Careers
                  </span>
                </div>
                <div className="flex flex-row justify-start items-start gap-[64px]">
                  <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-normal leading-[18px] sm:leading-[24px] md:leading-[30px] lg:leading-[36px] text-[#51515f] w-[52%]">
                    Client Stories<br />Blog<br />Contact
                  </span>
                  <div className="flex flex-col gap-[18px] justify-start items-start self-center w-[32%]">
                    <span className="text-[9px] sm:text-[12px] md:text-[15px] lg:text-[18px] font-bold leading-[11px] sm:leading-[15px] md:leading-[18px] lg:leading-[22px] text-[#0b0b35]">
                      Follow Us
                    </span>
                    <div className="flex flex-col gap-[16px] justify-start items-center">
                      <div className="flex flex-row justify-start items-start gap-[14px]">
                        <Image
                          src="/images/img_icon_gray_900.svg"
                          alt="LinkedIn"
                          width={16}
                          height={16}
                          className="w-[16px] h-[16px]"
                        />
                        <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-normal leading-[10px] sm:leading-[13px] md:leading-[16px] lg:leading-[20px] text-[#51515f] self-center">
                          LinkedIn
                        </span>
                      </div>
                      <div className="flex flex-row justify-center items-start gap-[14px]">
                        <Image
                          src="/images/img_vector_gray_900.svg"
                          alt="Facebook"
                          width={16}
                          height={16}
                          className="w-[16px] h-[16px]"
                        />
                        <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-normal leading-[10px] sm:leading-[13px] md:leading-[16px] lg:leading-[20px] text-[#51515f] self-center">
                          Facebook
                        </span>
                      </div>
                      <div className="flex flex-row justify-start items-start gap-[12px]">
                        <Image
                          src="/images/img_vector_gray_900_14x16.svg"
                          alt="Twitter"
                          width={16}
                          height={14}
                          className="w-auto h-[14px]"
                        />
                        <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-normal leading-[10px] sm:leading-[13px] md:leading-[16px] lg:leading-[20px] text-[#51515f] self-center ml-[12px]">
                          Twitter
                        </span>
                      </div>
                      <div className="flex flex-row justify-center items-start gap-[12px]">
                        <Image
                          src="/images/img_icon_gray_900_16x16.svg"
                          alt="Instagram"
                          width={16}
                          height={16}
                          className="w-[16px] h-[16px]"
                        />
                        <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-normal leading-[10px] sm:leading-[13px] md:leading-[16px] lg:leading-[20px] text-[#51515f] self-center">
                          Instagram
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Location Section */}
          <div className="flex flex-row justify-center items-end w-full mt-[124px] ml-[16px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] bg-[#fbfbff] border border-[#3433fe] rounded-[10px]">
            <div className="flex flex-col gap-[16px] justify-start items-center w-[76%] mt-[18px]">
              <div className="flex flex-row justify-center items-center w-full">
                <div className="flex flex-row justify-start items-center gap-[20px]">
                  <Image
                    src="/images/img_twemoji_flag_bangladesh.svg"
                    alt="Bangladesh flag"
                    width={26}
                    height={20}
                    className="w-auto h-[20px]"
                  />
                  <span className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-bold leading-[14px] sm:leading-[19px] md:leading-[24px] lg:leading-[29px] text-[#0b0b35]">
                    Dhaka
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center px-[56px] flex-1">
                  <Image
                    src="/images/img_twemoji_flag_united_states.svg"
                    alt="United States flag"
                    width={26}
                    height={20}
                    className="w-auto h-[20px]"
                  />
                  <span className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-bold leading-[14px] sm:leading-[19px] md:leading-[24px] lg:leading-[29px] text-[#0b0b35] ml-[20px]">
                    United States
                  </span>
                </div>
                <div className="flex flex-row justify-start items-center px-[56px] pr-[56px] pl-[138px] flex-1">
                  <Image
                    src="/images/img_emojione_v1_flag_for_canada.svg"
                    alt="Canada flag"
                    width={26}
                    height={20}
                    className="w-auto h-[20px]"
                  />
                  <span className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-bold leading-[14px] sm:leading-[19px] md:leading-[24px] lg:leading-[29px] text-[#0b0b35] ml-[20px]">
                    Canada
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-full mr-[86px] ml-[46px]">
                <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-medium leading-[13px] sm:leading-[18px] md:leading-[22px] lg:leading-[27px] text-[#51515f] w-[22%]">
                  Level 12B, 69/1 Chandrashila Suvastu Tower, Panthapath, Dhaka 1215
                </span>
                <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-medium leading-[13px] sm:leading-[18px] md:leading-[22px] lg:leading-[27px] text-[#51515f] w-[22%]">
                  Level 12B, 69/1 Chandrashila Suvastu Tower, Panthapath, Dhaka 1215
                </span>
                <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-medium leading-[13px] sm:leading-[18px] md:leading-[22px] lg:leading-[27px] text-[#51515f] w-[22%]">
                  Level 12B, 69/1 Chandrashila Suvastu Tower, Panthapath, Dhaka 1215
                </span>
              </div>
            </div>
          </div>
          {/* Copyright Section */}
          <div className="flex flex-row justify-between items-center w-full mt-[24px] mr-[238px] ml-[248px]">
            <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-medium leading-[10px] sm:leading-[13px] md:leading-[16px] lg:leading-[20px] text-[#51515f]">
              © 2025 Linno. All Rights Reserved.
            </span>
            <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-medium leading-[10px] sm:leading-[13px] md:leading-[16px] lg:leading-[20px] text-[#51515f]">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
