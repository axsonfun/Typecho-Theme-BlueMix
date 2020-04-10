<?php
/**
 * 搜索页面
 *
 * @package custom
 */
 ?>
<?php include('head.php'); ?>
<title><?php $this->title() ?> | <?php $this->options->title() ?></title>
<meta name="keywords" content="<?php $this->fields->guanjianci(); ?>" />
<meta name="description" content="<?php $this->fields->miaosu(); ?>" />
<?php include('header.php'); ?>
<section class="bg-theme" style="background:url(<?php $this->fields->toutu(); ?>) center;background-size:cover">
    <div class="bg-white-bot"></div>
    <div class="container">
        <div class="row align-items-center justify-content-center h-v-50 py-5">
            <div class="col-md-6"style="position:inherit">
                <div class="text-center text-md-left py-5">
                    <h1 class="h1 text-white" style="text-align: center!important;position: absolute;bottom: 0;left: 0;padding: 20px 10px 2em;right: 0;background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));margin-bottom: 0rem;">SEARCH PAGE</h1>
					<p class="text-lg font-theme text-white text-md" style="text-align: center!important;position: absolute;bottom: 0;left: 0;padding: 20px 10px 2em;right: 0;background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));margin-bottom: 0rem;"><?php $this->fields->jianyao(); ?></p>
                </div>
            </div>
        </div>
    </div>
</section>
<main class="knowledge-base py-4 py-md-5 bg-white">
    <div class="container">
        <div class="py-4 py-md-5">
            <div class="row justify-content-lg-center">
                <div class="col-lg-8">
                    <form action="" method="post">
                        <div class="input-group input-group-lg mb-4">
                            <input type="text" name="s" class="form-control form-control-lg" placeholder="KEYWORDS" required="">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary text-md" type="submit" id="s">SEARCH</button>
                             </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <section class="row my-n2">
                            <div class="col-md-12 mb-4 d-flex py-2">
                    <div class="posts-pushes bg-white d-flex flex-column flex-fill border border-2w rounded p-5" style="-webkit-transition: all .3s ease;-moz-transition: all .3s ease;-ms-transition: all .3s ease;-o-transition: all .3s ease;transition: all .3s ease;background-color: #fafaff!important;">
                        <h6 class="border-decor text-secondary">猜你喜欢</h6>
                        <ul style="height:220px;overflow:hidden;-webkit-transition: all .3s ease;-moz-transition: all .3s ease;-ms-transition: all .3s ease;-o-transition: all .3s ease;transition: all .3s ease;z-index: 2;" id="cnxh">
                                	                       <?php getRandomPosts('30');?></ul><ul id="zhankai" style="display:block">
														   <li style="height: 0px;"></li>
    						    						<li class="text-sm"><a class="text-muted" onclick="document.getElementById('cnxh').style.height = '100%';document.getElementById('zhankai').style.display = 'none';document.getElementById('shousuo').style.display = 'block';">查看更多...</a></li>
                        </ul>
						<ul id="shousuo" style="display:none;margin-top: -20px;">
						 <li style="height: 0px;"></li>
    						    						<li class="text-sm"><a class="text-muted" onclick="document.getElementById('cnxh').style.height = '220px';document.getElementById('zhankai').style.display = 'block';document.getElementById('shousuo').style.display = 'none';">折叠文章...</a></li>
                        </ul>
                    </div>
                </div>
                    </section>
    </div>
</main>
<?php include('footer.php'); ?>