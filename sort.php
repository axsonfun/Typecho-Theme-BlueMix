<?php
/**
 * 所有分类
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
                    <h1 class="h1 text-white" style="text-align: center!important;position: absolute;bottom: 0;left: 0;padding: 20px 10px 2em;right: 0;background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));margin-bottom: 0rem;">ALL CATEGORYS</h1>
					<p class="text-lg font-theme text-white text-md" style="text-align: center!important;position: absolute;bottom: 0;left: 0;padding: 20px 10px 2em;right: 0;background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));margin-bottom: 0rem;"><?php $this->fields->jianyao(); ?></p>
                </div>
            </div>
        </div>
    </div>
</section>
<main class="home">           
            <section class="offers anim-scale bg-light py-5" style="background-color: #fff!important">
                <div class="container">
                    <div class="row row-sm my-n2 my-n3 py-lg-4">
							<?php $this->widget('Widget_Metas_Category_List')->to($category); while($category->next()): ?>
							 <div class="d-flex col-6 col-lg-6 p-2 p-lg-3">
                            <a href="<?php $category->permalink(); ?>" class="d-flex flex-column flex-fill py-4 py-md-5" style="background-color: #fafaff">
                                <div class="hover"></div>
                                <img src="<?php $category->description(); ?>">
								<h5 class="border-decor bd-center"><?php $category->name(); ?></h5>
								<span class="text-md text-primary font-theme" style="text-transform:uppercase"><?php $category->slug(); ?></span>
                            </a>
                        </div>		
    <?php endwhile; ?>                   
                    </div>
                </div>
            </section>
    </main>
<?php include('footer.php'); ?>