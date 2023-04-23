import React,{ Component } from 'react'
import {Link} from "react-router-dom";

class Blog extends Component {
     render(){
          return(
               <div>


<main>

 
<div class="slider-area ">
    <div class="slider-height2 d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="hero-cap">
                        <h2>Blog Area</h2>
                        <nav aria-label="breadcrumb ">
                            <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item"><Link to="/">Blog</Link></li> 
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 
<section class="blog_area section-padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mb-5 mb-lg-0">
                <div class="blog_left_sidebar">
                    <article class="blog_item">
                        <div class="blog_item_img">
                            <img class="card-img rounded-0" src="assets/img/blog/single_blog_1.png" alt="" />
                            <Link to="/" class="blog_item_date">
                                <h3>15</h3>
                                <p>Jan</p>
                            </Link>
                        </div>

                        <div class="blog_details">
                            <Link class="d-inline-block" href="/">
                            <Link to="/blogdetails"><h2>Google inks pact for new 35-storey office</h2></Link>
                            </Link>
                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                he earth it first without heaven in place seed it second morning saying.</p>
                            <ul class="blog-info-link">
                                <li><Link to="#"><i class="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                <li><Link to="#"><i class="fa fa-comments"></i> 03 Comments</Link></li>
                            </ul>
                        </div>
                    </article>

                    <article class="blog_item">
                        <div class="blog_item_img">
                            <img class="card-img rounded-0" src="assets/img/blog/single_blog_2.png" alt="" />
                            <Link to="/" class="blog_item_date">
                                <h3>15</h3>
                                <p>Jan</p>
                            </Link>
                        </div>

                        <div class="blog_details">
                            <Link class="d-inline-block" to="/">
                                <h2>Google inks pact for new 35-storey office</h2>
                            </Link>
                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                he earth it first without heaven in place seed it second morning saying.</p>
                            <ul class="blog-info-link">
                                <li><Link to="/"><i class="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                <li><Link to="/"><i class="fa fa-comments"></i> 03 Comments</Link></li>
                            </ul>
                        </div>
                    </article>

                    <article class="blog_item">
                        <div class="blog_item_img">
                            <img class="card-img rounded-0" src="assets/img/blog/single_blog_3.png" alt="" />
                            <Link to="/" class="blog_item_date">
                                <h3>15</h3>
                                <p>Jan</p>
                            </Link>
                        </div>

                        <div class="blog_details">
                            <Link class="d-inline-block" to="/">
                                <h2>Google inks pact for new 35-storey office</h2>
                            </Link>
                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                he earth it first without heaven in place seed it second morning saying.</p>
                            <ul class="blog-info-link">
                                <li><Link to="/"><i class="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                <li><Link to="/"><i class="fa fa-comments"></i> 03 Comments</Link></li>
                            </ul>
                        </div>
                    </article>

                    <article class="blog_item">
                        <div class="blog_item_img">
                            <img class="card-img rounded-0" src="assets/img/blog/single_blog_4.png" alt="" />
                            <Link to="/" class="blog_item_date">
                                <h3>15</h3>
                                <p>Jan</p>
                            </Link>
                        </div>

                        <div class="blog_details">
                            <Link class="d-inline-block" to="/">
                                <h2>Google inks pact for new 35-storey office</h2>
                            </Link>
                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                he earth it first without heaven in place seed it second morning saying.</p>
                            <ul class="blog-info-link">
                                <li><Link to="/"><i class="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                <li><Link to="/"><i class="fa fa-comments"></i> 03 Comments</Link></li>
                            </ul>
                        </div>
                    </article>

                    <article class="blog_item">
                        <div class="blog_item_img">
                            <img class="card-img rounded-0" src="assets/img/blog/single_blog_5.png" alt="" />
                            <Link to="/" class="blog_item_date">
                                <h3>15</h3>
                                <p>Jan</p>
                            </Link>
                        </div>

                        <div class="blog_details">
                            <Link class="d-inline-block" to="/">
                                <h2>Google inks pact for new 35-storey office</h2>
                            </Link>
                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                he earth it first without heaven in place seed it second morning saying.</p>
                            <ul class="blog-info-link">
                                <li><Link to="/"><i class="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                <li><Link to="/"><i class="fa fa-comments"></i> 03 Comments</Link></li>
                            </ul>
                        </div>
                    </article>

                    <nav class="blog-pagination justify-content-center d-flex">
                        <ul class="pagination">
                            <li class="page-item">
                            <Link to="/" class="page-link" aria-label="Previous">
                                    <i class="ti-angle-left"></i>
                                </Link>
                            </li>
                            <li class="page-item">
                            <Link to="/" class="page-link">1</Link>
                            </li>
                            <li class="page-item active">
                            <Link to="/" class="page-link">2</Link>
                            </li>
                            <li class="page-item">
                            <Link to="/" class="page-link" aria-label="Next">
                                    <i class="ti-angle-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="blog_right_sidebar">
                    <aside class="single_sidebar_widget search_widget">
                        <form action="#">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder='Search Keyword'
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Search Keyword'" />
                                    <div class="input-group-append">
                                        <button class="btns" type="button"><i class="ti-search"></i></button>
                                    </div>
                                </div>
                            </div>
                            <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                type="submit">Search</button>
                        </form>
                    </aside>

                    <aside class="single_sidebar_widget post_category_widget">
                        <h4 class="widget_title">Category</h4>
                        <ul class="list cat-list">
                            <li>
                            <Link to="/" class="d-flex">
                                    <p>Resaurant food</p>
                                    <p>(37)</p>
                                </Link>
                            </li>
                            <li>
                            <Link to="/" class="d-flex">
                                    <p>Travel news</p>
                                    <p>(10)</p>
                                </Link>
                            </li>
                            <li>
                            <Link to="/" class="d-flex">
                                    <p>Modern technology</p>
                                    <p>(03)</p>
                                </Link>
                            </li>
                            <li>
                            <Link to="/" class="d-flex">
                                    <p>Product</p>
                                    <p>(11)</p>
                                </Link>
                            </li>
                            <li>
                            <Link to="/" class="d-flex">
                                    <p>Inspiration</p>
                                    <p>21</p>
                                </Link>
                            </li>
                            <li>
                            <Link to="/" class="d-flex">
                                    <p>Health Care (21)</p>
                                    <p>09</p>
                                </Link>
                            </li>
                        </ul>
                    </aside>

                    <aside class="single_sidebar_widget popular_post_widget">
                        <h3 class="widget_title">Recent Post</h3>
                        <div class="media post_item">
                            <img src="assets/img/post/post_1.png" alt="post" />
                            <div class="media-body">
                                <Link to="/">
                                    <h3>From life was you fish...</h3>
                                </Link>
                                <p>January 12, 2019</p>
                            </div>
                        </div>
                        <div class="media post_item">
                            <img src="assets/img/post/post_2.png" alt="post" />
                            <div class="media-body">
                                <Link href="/">
                                    <h3>The Amazing Hubble</h3>
                                </Link>
                                <p>02 Hours ago</p>
                            </div>
                        </div>
                        <div class="media post_item">
                            <img src="assets/img/post/post_3.png" alt="post" />
                            <div class="media-body">
                                <Link to="blog_details.html">
                                    <h3>Astronomy Or Astrology</h3>
                                </Link>
                                <p>03 Hours ago</p>
                            </div>
                        </div>
                        <div class="media post_item">
                            <img src="assets/img/post/post_4.png" alt="post" />
                            <div class="media-body">
                                <Link to="/">
                                    <h3>Asteroids telescope</h3>
                                </Link>
                                <p>01 Hours ago</p>
                            </div>
                        </div>
                    </aside>
                    <aside class="single_sidebar_widget tag_cloud_widget">
                        <h4 class="widget_title">Tag Clouds</h4>
                        <ul class="list">
                            <li>
                            <Link to="/">project</Link>
                            </li>
                            <li>
                            <Link to="/">love</Link>
                            </li>
                            <li>
                            <Link to="/">technology</Link>
                            </li>
                            <li>
                            <Link to="/">travel</Link>
                            </li>
                            <li>
                            <Link to="/">restaurant</Link>
                            </li>
                            <li>
                            <Link to="/">life style</Link>
                            </li>
                            <li>
                            <Link to="/">design</Link>
                            </li>
                            <li>
                            <Link to="/">illustration</Link>
                            </li>
                        </ul>
                    </aside>

                    <aside class="single_sidebar_widget instagram_feeds">
                        <h4 class="widget_title">Instagram Feeds</h4>
                        <ul class="instagram_row flex-wrap">
                            <li>
                            <Link to="/">
                                    <img class="img-fluid" src="assets/img/post/post_5.png" alt="" />
                                </Link>
                            </li>
                            <li>
                            <Link to="/">
                                    <img class="img-fluid" src="assets/img/post/post_6.png" alt="" />
                                </Link>
                            </li>
                            <li>
                            <Link to="/">
                                    <img class="img-fluid" src="assets/img/post/post_7.png" alt="" />
                                </Link>
                            </li>
                            <li>
                            <Link to="/">
                                    <img class="img-fluid" src="assets/img/post/post_8.png" alt="" />
                                </Link>
                            </li>
                            <li>
                            <Link to="/">
                                    <img class="img-fluid" src="assets/img/post/post_9.png" alt="" />
                                </Link>
                            </li>
                            <li>
                            <Link to="/">
                                    <img class="img-fluid" src="assets/img/post/post_10.png" alt="" />
                                </Link>
                            </li>
                        </ul>
                    </aside>


                    <aside class="single_sidebar_widget newsletter_widget">
                        <h4 class="widget_title">Newsletter</h4>

                        <form action="#">
                            <div class="form-group">
                                <input type="email" class="form-control" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Enter email'" placeholder='Enter email' required />
                            </div>
                            <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                type="submit">Subscribe</button>
                        </form>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</section>
 

</main>





               </div>
          )
     }
}

export default Blog 

