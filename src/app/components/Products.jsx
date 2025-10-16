'use client';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { products } from '../products/ProductsContent';

const Products = () => {
    return (
        <>
            <section className="linno-products">
				<div className="linno-new-container">
					<div className="linno-section-title">
						<h2>
							The Solutions We've Built To Deliver <span className="title-gradient">Real Value</span>
						</h2>

						<p>
							At Linno, innovation isn't just a buzzword. We are all passionate about solving real world problems, with <strong>innovation</strong> being the key driver, powered by teamwork, and continuous learning.
							<br />
							<br />
							Take a look at what we've built, making a difference for over 50,000+ people as we speak!
						</p>
					</div>

					<div className="linno-products-wrapper">
						{
							products.map((product, index) => (
								<Link href={product.link} target='_blank' key={index}>
									<div className="linno-single-product">
										<div className="gradient-overlay"></div>

										<figure className="product-logo">
											<span className="logo-gradient-bg"></span>
											{product.image}
										</figure>

										<h3 className="product-title" data-title={product.title}>
											{product.title}
										</h3>
										<p className="product-description">
											{product.description}
										</p>

										<p className="learn-more-link">
											Learn More

											<svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path stroke="#585A65" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.476" d="M12.806 1.182L1 12.988M12.806 1.182v8.66m0-8.66h-8.66"/></svg>
										</p>
										
									</div>
								</Link>
							))
						}
					</div>
				</div>
			</section>
        </>
    );
};

export default memo(Products);