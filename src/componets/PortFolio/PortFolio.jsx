import React from 'react';
import './PortFolio.css';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


const PortFolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Protfolio</h2>
            <span className="section__subtitle">Most major work</span>

            <div className="portfolio__container container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-css-mode">
                <div className="swiper-wrapper" id="swiper-wrapper-e6c477579d6a9061" aria-live="polite">
                    <div className="portfolio__content grid swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="1 / 5" style={{width:"768px"}}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M25 50C38.8066 50 50 38.8066 50 25C50 11.1933 38.8066 0 25 0C11.1933 0 0 11.1933 0 25C0 38.8066 11.1933 50 25 50ZM39.936 37.3182V27.0106C39.936 21.4923 36.9897 18.9225 33.0576 18.9225C29.8828 18.9225 28.4663 20.67 27.672 21.8927V19.3449H21.6946C21.7751 21.031 21.6946 37.3183 21.6946 37.3183H27.672V27.2805C27.672 26.7408 27.7112 26.2077 27.87 25.8247C28.303 24.7497 29.2845 23.6378 30.9338 23.6378C33.099 23.6378 33.9607 25.2872 33.9607 27.7025V37.3182H39.936ZM27.672 21.8927V21.9512H27.6328C27.6382 21.9415 27.6452 21.932 27.6522 21.9224C27.6594 21.9125 27.6665 21.9026 27.672 21.8927ZM12.0637 13.7871C12.0637 12.0245 13.3997 10.6819 15.4452 10.6819C17.4885 10.6819 18.7462 12.0246 18.7854 13.7871C18.7854 15.5127 17.4885 16.892 15.4039 16.892H15.3669C13.3606 16.892 12.0637 15.5126 12.0637 13.7871ZM18.3915 37.3183H12.4184V19.3449H18.3915V37.3183Z" fill="white"></path>
                            </svg>
                            

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">LinkedIn Profile</h3>
                            <p className="portfolio__description">I am Civil Engineering under graduate proficient 
                                in building software systems. Seasoned knowledge and understanding of 
                                Full Stack Development and a part 
                                time dancing.

                            </p>
                            <div className="portfolio__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                Nov 2022 - Present
                            </div>
                            <a href="https://www.linkedin.com/in/Aishwarya-Shinde17/" className="button button--flex button--small videos__button" target="_blank">
                            Follow for updates !
                        </a>
                        </div>
                    </div>
                    <div className="portfolio__content grid swiper-slide swiper-slide-active" data-swiper-slide-index="0" role="group" aria-label="2 / 5" style={{width:"768px"}}>
                        
                        <svg width="45" height="51" viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.0582 10.2897C41.8648 10.0331 41.6582 9.78677 41.4392 9.55169C41.6595 8.96471 41.8268 8.35919 41.9392 7.74237C42.2709 5.48595 41.9828 3.1818 41.1059 1.07646C41.1059 1.07646 38.4396 0.243216 32.3212 4.3618C29.7237 3.64458 27.0406 3.28417 24.3459 3.29049C21.6435 3.28576 18.9528 3.64612 16.3468 4.3618C10.2285 0.195602 7.56209 1.07646 7.56209 1.07646C6.69576 3.15953 6.40788 5.43786 6.72885 7.67095C6.84181 8.31341 7.01723 8.94331 7.2526 9.55169C7.03834 9.78976 6.82407 10.0516 6.63362 10.2897C4.85707 12.518 3.91404 15.2966 3.96725 18.146C3.9616 18.8217 3.9934 19.4973 4.06248 20.1695C4.82416 30.716 11.8473 33.1681 18.537 33.9299C17.5901 34.8103 16.9481 35.9693 16.7039 37.239C16.4826 38.0858 16.3785 38.9589 16.3944 39.834V42.9517C13.7323 43.1882 10.9987 42.8008 10.1518 40.4249C9.24144 38.1515 7.73223 36.167 5.78452 34.6825C5.64298 34.6051 5.50837 34.5156 5.38219 34.4151C5.21115 33.9653 4.90797 33.5777 4.51251 33.3034C4.11706 33.0291 3.64785 32.881 3.16658 32.8784H3.15513C2.52568 32.8781 1.92177 33.1273 1.47559 33.5713C1.02941 34.0153 0.7773 34.618 0.774447 35.2474C0.765163 37.1817 2.70063 38.4302 3.49457 38.8556C4.42049 39.7886 5.16542 40.8851 5.69158 42.0896C6.55877 44.5261 9.09406 48.2273 16.3233 47.7461C16.3257 47.8298 16.328 47.9088 16.3291 47.9809L16.3396 48.6179C16.3395 48.9306 16.401 49.2402 16.5206 49.529C16.6402 49.8179 16.8156 50.0804 17.0367 50.3015C17.2578 50.5226 17.5202 50.6979 17.8091 50.8175C18.098 50.9371 18.4076 50.9987 18.7203 50.9986L18.7277 50.9971V50.9987H29.9433C30.256 50.9987 30.5656 50.9372 30.8545 50.8176C31.1434 50.698 31.4058 50.5226 31.6269 50.3016C31.848 50.0805 32.0234 49.818 32.143 49.5291C32.2626 49.2402 32.3241 48.9306 32.324 48.618C32.324 48.618 32.3415 41.0958 32.3415 39.8341C32.3573 38.9591 32.2532 38.0859 32.032 37.2392L32.0276 37.2246L32.0356 37.2392C32.0151 37.1558 31.9839 37.0879 31.9615 37.0071C31.6958 35.8278 31.0816 34.7557 30.1987 33.9299L30.2263 33.9796C30.2101 33.9649 30.1948 33.9441 30.1785 33.9299C36.8683 33.168 43.8437 30.6683 44.6055 20.1695C44.6746 19.4973 44.7063 18.8217 44.7007 18.1459C44.7428 15.3023 43.8103 12.5299 42.0582 10.2897V10.2897Z" fill="white"></path>
                            </svg>
                            
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Github Projects</h3>
                            <p className="portfolio__description"> I am working as an Fullstack Developer.
                             Recently constructed some projects. 
                            </p>
                            <div className="portfolio__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                Dec 2022 - Present
                            </div>
                            <a href="https://github.com/" className="button button--flex button--small videos__button" target="_blank">
                            Currently working
                        </a>
                        </div>
                    </div>
                    {/* <div className="portfolio__content grid swiper-slide swiper-slide-next" data-swiper-slide-index="1" role="group" aria-label="3 / 5" style={{width:"768px"}}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.8999 22.975C31.5518 22.9736 31.2072 23.0449 30.8882 23.1844C30.5692 23.3239 30.2829 23.5284 30.0476 23.7849C29.8122 24.0415 29.633 24.3443 29.5215 24.6741C29.41 25.0039 29.3686 25.3533 29.3999 25.7H34.5499C34.5832 25.3403 34.5381 24.9777 34.4177 24.6371C34.2974 24.2964 34.1046 23.9859 33.8528 23.727C33.6009 23.468 33.2959 23.2666 32.9588 23.1368C32.6217 23.007 32.2604 22.9518 31.8999 22.975ZM18.7249 25.75H15.6499V30.6H18.1499C20.6499 30.6 21.7499 29.775 21.7499 28.1C21.7499 26.425 20.5999 25.75 18.7249 25.75V25.75ZM20.8999 21.3C20.8999 19.975 20.0249 19.175 18.5249 19.175H15.6499V23.525H17.7749C19.9999 23.525 20.8999 22.725 20.8999 21.3Z" fill="white"></path>
                            <path d="M25 0C20.0555 0 15.222 1.46622 11.1108 4.21326C6.99952 6.96029 3.79521 10.8648 1.90302 15.4329C0.0108321 20.0011 -0.484251 25.0277 0.480379 29.8773C1.44501 34.7268 3.82603 39.1813 7.32234 42.6777C10.8187 46.174 15.2732 48.555 20.1228 49.5196C24.9723 50.4843 29.9989 49.9892 34.5671 48.097C39.1352 46.2048 43.0397 43.0005 45.7867 38.8892C48.5338 34.778 50 29.9445 50 25C50 21.7169 49.3534 18.466 48.097 15.4329C46.8406 12.3998 44.9991 9.64379 42.6777 7.32233C40.3562 5.00086 37.6002 3.15938 34.5671 1.90301C31.534 0.646644 28.2831 0 25 0V0ZM19.25 33H12.5V16.75H19.25C22.175 16.75 24.1 18.275 24.1 20.75C24.1345 21.5815 23.8716 22.398 23.3585 23.0532C22.8453 23.7084 22.1155 24.1593 21.3 24.325C21.8168 24.337 22.3258 24.4543 22.7957 24.6698C23.2657 24.8852 23.6867 25.1943 24.033 25.5781C24.3794 25.9619 24.6438 26.4123 24.8101 26.9019C24.9763 27.3914 25.041 27.9096 25 28.425C25 31.325 22.5 33 19.25 33ZM28.125 18H35.625V19.25H28.125V18ZM37.5 27.625H29.25V27.975C29.207 28.3549 29.2459 28.7396 29.3642 29.1031C29.4824 29.4667 29.6772 29.8007 29.9355 30.0826C30.1937 30.3646 30.5094 30.5879 30.8612 30.7375C31.213 30.8871 31.5928 30.9596 31.975 30.95C32.5116 31.0334 33.0603 30.9198 33.5198 30.6304C33.9792 30.3409 34.3185 29.895 34.475 29.375H37.5C37.2306 30.5751 36.5284 31.6337 35.5276 32.3486C34.5268 33.0635 33.2976 33.3844 32.075 33.25C31.2936 33.3289 30.5045 33.2356 29.763 32.9767C29.0216 32.7179 28.3459 32.2996 27.7835 31.7515C27.2211 31.2034 26.7856 30.5387 26.5077 29.8042C26.2298 29.0696 26.1162 28.2831 26.175 27.5V26.4C26.1219 25.6412 26.2336 24.8798 26.5023 24.1682C26.771 23.4566 27.1905 22.8115 27.7319 22.2772C28.2734 21.7429 28.924 21.332 29.6391 21.0727C30.3542 20.8134 31.117 20.7119 31.875 20.775C32.6306 20.7266 33.3877 20.8406 34.0955 21.1093C34.8033 21.3781 35.4453 21.7954 35.9783 22.3331C36.5113 22.8708 36.9229 23.5165 37.1853 24.2266C37.4478 24.9368 37.5551 25.6949 37.5 26.45V27.625Z" fill="white"></path>
                            </svg>
                            

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Behnace Projects</h3>
                            <p className="portfolio__description">As designers we strive to make the perfect pizza out of complex problems/solutions 
                                and serve it to the common people to consume and enjoy. 
                                I believe at the core of any design, engineering solution, product, UI being human centered is the key. </p>
                            <div className="portfolio__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                May 2019 - Present
                            </div>
                            <a href="https://www.behance.net/sashankdeb1" className="button button--flex button--small videos__button" target="_blank">
                            Currently working
                        </a>
                        </div>
                    </div>  */}
                     {/* <div className="portfolio__content grid swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="2" role="group" aria-label="4 / 5" style={{width:"768px"}}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clip-rule="evenodd" d="M25 50C38.8066 50 50 38.8066 50 25C50 11.1933 38.8066 0 25 0C11.1933 0 0 11.1933 0 25C0 38.8066 11.1933 50 25 50ZM39.936 37.3182V27.0106C39.936 21.4923 36.9897 18.9225 33.0576 18.9225C29.8828 18.9225 28.4663 20.67 27.672 21.8927V19.3449H21.6946C21.7751 21.031 21.6946 37.3183 21.6946 37.3183H27.672V27.2805C27.672 26.7408 27.7112 26.2077 27.87 25.8247C28.303 24.7497 29.2845 23.6378 30.9338 23.6378C33.099 23.6378 33.9607 25.2872 33.9607 27.7025V37.3182H39.936ZM27.672 21.8927V21.9512H27.6328C27.6382 21.9415 27.6452 21.932 27.6522 21.9224C27.6594 21.9125 27.6665 21.9026 27.672 21.8927ZM12.0637 13.7871C12.0637 12.0245 13.3997 10.6819 15.4452 10.6819C17.4885 10.6819 18.7462 12.0246 18.7854 13.7871C18.7854 15.5127 17.4885 16.892 15.4039 16.892H15.3669C13.3606 16.892 12.0637 15.5126 12.0637 13.7871ZM18.3915 37.3183H12.4184V19.3449H18.3915V37.3183Z" fill="white"></path>
                            </svg>
                            

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">LinkedIn Profile</h3>
                            <p className="portfolio__description">I am Computer Engineering under graduate proficient 
                                in building software systems. Seasoned knowledge and understanding of 
                                Full Stack Development and Graphic Design. A Machine learning enthusiast and a part 
                                time Photographer.

                            </p>
                            <div className="portfolio__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                Jan 2018 - Present
                            </div>
                            <a href="https://www.linkedin.com/in/sashank-deb/" className="button button--flex button--small videos__button" target="_blank">
                            Follow for updates !
                        </a>
                        </div>
                    </div>  */}
                {/* <div className="portfolio__content grid swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" role="group" aria-label="5 / 5" style={{width:"768px"}}>
                        
                        <svg width="45" height="51" viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.0582 10.2897C41.8648 10.0331 41.6582 9.78677 41.4392 9.55169C41.6595 8.96471 41.8268 8.35919 41.9392 7.74237C42.2709 5.48595 41.9828 3.1818 41.1059 1.07646C41.1059 1.07646 38.4396 0.243216 32.3212 4.3618C29.7237 3.64458 27.0406 3.28417 24.3459 3.29049C21.6435 3.28576 18.9528 3.64612 16.3468 4.3618C10.2285 0.195602 7.56209 1.07646 7.56209 1.07646C6.69576 3.15953 6.40788 5.43786 6.72885 7.67095C6.84181 8.31341 7.01723 8.94331 7.2526 9.55169C7.03834 9.78976 6.82407 10.0516 6.63362 10.2897C4.85707 12.518 3.91404 15.2966 3.96725 18.146C3.9616 18.8217 3.9934 19.4973 4.06248 20.1695C4.82416 30.716 11.8473 33.1681 18.537 33.9299C17.5901 34.8103 16.9481 35.9693 16.7039 37.239C16.4826 38.0858 16.3785 38.9589 16.3944 39.834V42.9517C13.7323 43.1882 10.9987 42.8008 10.1518 40.4249C9.24144 38.1515 7.73223 36.167 5.78452 34.6825C5.64298 34.6051 5.50837 34.5156 5.38219 34.4151C5.21115 33.9653 4.90797 33.5777 4.51251 33.3034C4.11706 33.0291 3.64785 32.881 3.16658 32.8784H3.15513C2.52568 32.8781 1.92177 33.1273 1.47559 33.5713C1.02941 34.0153 0.7773 34.618 0.774447 35.2474C0.765163 37.1817 2.70063 38.4302 3.49457 38.8556C4.42049 39.7886 5.16542 40.8851 5.69158 42.0896C6.55877 44.5261 9.09406 48.2273 16.3233 47.7461C16.3257 47.8298 16.328 47.9088 16.3291 47.9809L16.3396 48.6179C16.3395 48.9306 16.401 49.2402 16.5206 49.529C16.6402 49.8179 16.8156 50.0804 17.0367 50.3015C17.2578 50.5226 17.5202 50.6979 17.8091 50.8175C18.098 50.9371 18.4076 50.9987 18.7203 50.9986L18.7277 50.9971V50.9987H29.9433C30.256 50.9987 30.5656 50.9372 30.8545 50.8176C31.1434 50.698 31.4058 50.5226 31.6269 50.3016C31.848 50.0805 32.0234 49.818 32.143 49.5291C32.2626 49.2402 32.3241 48.9306 32.324 48.618C32.324 48.618 32.3415 41.0958 32.3415 39.8341C32.3573 38.9591 32.2532 38.0859 32.032 37.2392L32.0276 37.2246L32.0356 37.2392C32.0151 37.1558 31.9839 37.0879 31.9615 37.0071C31.6958 35.8278 31.0816 34.7557 30.1987 33.9299L30.2263 33.9796C30.2101 33.9649 30.1948 33.9441 30.1785 33.9299C36.8683 33.168 43.8437 30.6683 44.6055 20.1695C44.6746 19.4973 44.7063 18.8217 44.7007 18.1459C44.7428 15.3023 43.8103 12.5299 42.0582 10.2897V10.2897Z" fill="white"></path>
                            </svg>
                            
                        

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Github Projects</h3>
                            <p className="portfolio__description"> I am working as an Fullstack Developer and have been exploring 
                                android eco system for years now. Recently constructed some projects. Would be really glad to listen to your feedback. 
                            </p>
                            <div className="portfolio__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                Dec 2020 - Present
                            </div>
                            <a href="https://github.com/Sashank-Deb" className="button button--flex button--small videos__button" target="_blank">
                            Currently working
                        </a>
                        </div>
                    </div> */}
                    
                    </div>

                <div className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-e6c477579d6a9061">
                    {/* <i className="uil uil-angle-right-b swiper-portfolio-icon"> */}
                    <GrNext />
                    {/* </i> */}
                </div>
                <div className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-e6c477579d6a9061">
                    {/* <i className="uil uil-angle-left-b swiper-portfolio-icon"><GrPrevious /> */}
                    {/* </i> */}
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex="0" role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 3"></span></div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

        </section>
  )
}

export default PortFolio
