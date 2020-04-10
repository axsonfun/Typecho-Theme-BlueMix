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
                    <h1 class="h1 text-white aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-out-quart" data-aos-once="false" data-aos-duration="600" data-aos-delay="100" style="text-align: center!important;position: absolute;bottom: 0;left: 0;padding: 20px 10px 2em;right: 0;background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));margin-bottom: 0rem;"><?php $this->title() ?></h1>
                </div>
            </div>
        </div>
    </div>
</section>
<main class="wrapper py-4 py-md-5" style="transform: none;">
    <div class="container" style="transform: none;">
        <section class="mb-1 mb-md-3">
            <div class="breadcrumbs text-xs"><span itemprop="itemListElement"><a href="<?php $this->options->siteUrl(); ?>" itemprop="item" class="home"><span itemprop="name">HOME</span></a></span> <span class="sep"><i class="text-primary px-1">•</i></span> <span itemprop="itemListElement"><?php $this->category(','); ?></span><span class="sep"><i class="text-primary px-1">•</i></span><span class="current"><?php $this->title() ?></span><span class="current" style="float: right"><?php $this->date('n月j日'); ?><span class="sep"><i class="text-primary px-1">•</i></span><?php $this->date('Y年'); ?></span></div></section>
			<div class="border-bottom border-2w my-4"></div>
			<section class="row" style="transform: none;">
            <div class="col-12 col-lg-12 pr-lg-12">
                <div class="post">
                    <div class="bg-white mb-4">
                        <div class="content content-style">
                            <div class="nc-light-gallery"><?php $this->content(''); ?></div>
                        </div>
						<div class="mb-4">
                            <div class="user-item user-info border border-2w rounded">
                                <div class="d-flex p-4">
                                    <div class="avatar w-64">
                                        <img src="<?php $this->options->touxiang(); ?>" class="avatar avatar-64 photo dm-tips" height="64" width="64"></div>
                                    <div class="info mx-3">
                                        <h3 class="name h5"><?php $this->options->nicheng(); ?></h3>
                                        <div class="desc text-sm text-muted mt-2">
                                            <?php $this->options->geqian(); ?></div>
                                    </div>
                                  		<a onclick="document.getElementById('poster').className='popup popup-open';" class="m-submit-p btn-edit-profile" style="color:#fff"><i class="iconfont icon-share_fill"></i></a>
                                </div>
                            </div>
                        </div><?php $this->options->guanggao(); ?>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>
<?php include('comments.php'); ?>
<?php include('poster.php'); ?>
<?php include('footer.php'); ?>