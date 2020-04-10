<?php include('head.php'); ?>
<title><?php if($this->is('category') && $this->_currentPage == 1): ?>
				<?php $categories=$this->categories;foreach($categories as $cate){echo $cate['name'];} ?>
					<?php endif ?>
					<?php if($this->is('category') && $this->_currentPage > 1): ?>
				 <?php $categories=$this->categories;foreach($categories as $cate){echo $cate['name'];} ?>第「<?php echo $this->_currentPage; ?>」页
					<?php endif ?> | <?php $this->options->title() ?></title>
<meta name="keywords" content="<?php $this->options->guanjianci(); ?>" />
<meta name="description" content="<?php $this->options->miaosu(); ?>" />
<?php include('header.php'); ?>
<section class="bg-theme" style="background:url(<?php $this->options->flshoutu(); ?>) center;background-size:cover">
    <div class="bg-white-bot"></div>
    <div class="container">
        <div class="row align-items-center justify-content-center h-v-50 py-5">
            <div class="col-md-6"style="position:inherit">
                <div class="text-center text-md-left py-5">
                    <h1 class="h1 text-white" style="text-align: center!important;position: absolute;bottom: 0;left: 0;padding: 20px 10px 2em;right: 0;background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));margin-bottom: 0rem;text-transform:uppercase"><?php if($this->is('category') && $this->_currentPage == 1): ?>
				<?php $categories=$this->categories;foreach($categories as $cate){echo $cate['slug'];} ?> ARTICLES
					<?php endif ?>
					<?php if($this->is('category') && $this->_currentPage > 1): ?>
				<?php $categories=$this->categories;foreach($categories as $cate){echo $cate['slug'];} ?> PAGE <?php echo $this->_currentPage; ?>
					<?php endif ?></h1>
					<p class="text-lg font-theme text-white text-md" style="text-align: center!important;position: absolute;bottom: 0;left: 0;padding: 20px 10px 2em;right: 0;background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));margin-bottom: 0rem;">“<?php $categories=$this->categories;foreach($categories as $cate){echo $cate['name'];} ?>”</p>
                </div>
            </div>
        </div>
    </div>
</section>
    <main class="home">
                    <section class="preview py-5">
                <div class="container">
                    <div class="row row-sm my-n2 my-n3 py-lg-4">
							<?php while($this->next()): ?>
							<div class="d-flex col-6 col-md-4 p-2 p-lg-3">
                                <div class="nice-media d-flex flex-column flex-fill">
                                    <a class="nice-media-content" href="<?php $this->permalink() ?>" title="<?php $this->title() ?>" style="background-image: url(<?php $this->fields->toutu(); ?>)">
									<span class="info" style="text-align: center;position: absolute;color: #ffffff;font-size: 1rem;top: 0;left: 0;padding: 20px 10px;right: 0;background: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,0));opacity: 0;-webkit-transition: all .3s ease;-moz-transition: all .3s ease;-ms-transition: all .3s ease;-o-transition: all .3s ease;transition: all .3s ease;"><?php $this->date('n月j日 · Y年'); ?><br>“<?php $this->category(' · ', false); ?>”</span>
                                        <span class="name"><?php $this->title() ?></span>
                                    </a>
                                </div>
                            </div>
<?php endwhile; ?>
</div></div>
            </section>
        </div>
    </main>
	<?php include('pagenav.php'); ?>
<?php include('footer.php'); ?>