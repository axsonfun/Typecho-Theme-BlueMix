<?php include('head.php'); ?>
<title>页面丢失 | <?php $this->options->title() ?></title>
<?php include('header.php'); ?>
<section class="bg-theme" style="background:url(<?php $this->options->noshoutu(); ?>) center;background-size:cover">
    <div class="bg-white-bot"></div>
    <div class="container">
        <div class="row align-items-center justify-content-center h-v-50 py-5">
            <div class="col-md-6"style="position:inherit">
                <div class="text-center text-md-left py-5">
                    <h1 class="h1 text-white" style="text-align: center!important;position: absolute;bottom: 0;left: 0;padding: 20px 10px 2em;right: 0;background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));margin-bottom: 0rem;">NOT FOUND</h1>
					<p class="text-lg font-theme text-white text-md" style="text-align: center!important;position: absolute;bottom: 0;left: 0;padding: 20px 10px 2em;right: 0;background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));margin-bottom: 0rem;">“访问的页面已丢失”</p>
                </div>
            </div>
        </div>
    </div>
</section>
<main class="knowledge-base py-4 py-md-5 bg-white">
    <div class="container">
	<h2 class="h2" style="text-align: center;">或许<span class="text-primary">「搜索」</span>可以找回内容</h1>
	<p style="text-align: center;">Maybe<span class="text-primary"> Search </span>Can Find The Page</p>
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
    </div>
</main>
<?php include('footer.php'); ?>