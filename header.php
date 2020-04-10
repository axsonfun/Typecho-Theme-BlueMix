</head>
<body>
<header style="position: fixed;top:0;left:0;width:100%;">
            <nav class="navbar navbar-expand-xl py-md-4">
                <div class="container">
                    <a href="<?php $this->options->siteUrl(); ?>" class="navbar-brand logo" style="background-image:url(<?php $this->options->logo(); ?>)"></a><div class="navbar-collapse collapse order-2 order-xl-1" id="navbarSite">
<ul class="navbar-nav main-nav flex-lg-row  font-weight-light  mx-auto" style="margin-right: 0!important">
<li class="menu-onsale-tips menu-item menu-item-type-post_type menu-item-object-page menu-item-3687">
<a href="<?php $this->options->siteUrl(); ?>">HOME<?php if($this->is('index')): ?><small style="height: 12px;width: 12px;border-radius: 50%"></small><?php endif ?></a></li><?php $this->widget('Widget_Contents_Page_List')->to($pages); while($pages->next()): ?><li class="menu-onsale-tips menu-item menu-item-type-post_type menu-item-object-page menu-item-3687">
<a href="<?php $pages->permalink(); ?>"><?php $pages->title(); ?><?php if($this->is('page', $pages->slug)): ?><small style="height: 12px;width: 12px;border-radius: 50%"></small><?php endif ?></a>
</li><?php endwhile; ?></ul></div>
                    <ul class="navbar-nav align-items-center flex-row order-1 order-xl-2">
                        <li class="nav-item">
                            <button class="navbar-toggler collapsed mx-2" type="button" data-toggle="collapse" data-target="#navbarSite" aria-controls="navbarSite" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="text-lg iconfont icon-menu"></i>
                            </button>
                        </li><li class="nav-item "><a class="" href="<?php $this->options->solink(); ?>"><i class="text-xl iconfont icon-search"></i></a></li>
                    </ul>
                </div>
            </nav>
        </header>