<?php if($this->allow('comment')): ?>
<div class="mb-4">
<div class="user-item user-info border border-2w rounded">
<div class="p-4">
<h6 class="border-decor text-secondary"><?php $this->commentsNum('已有 0 条评论', '已有 1 条评论', '已有 %d 条评论'); ?></h6>
<form method="post" action="<?php $this->commentUrl() ?>" id="comment_form">
<?php if($this->user->hasLogin()): ?>
 <p>Logged in as <a href="<?php $this->options->adminUrl(); ?>"><?php $this->user->screenName(); ?></a>. 
            <a href="<?php $this->options->index('Logout.do'); ?>" title="Logout">Logout &raquo;</a></p>
			<?php else: ?>
             <div class="col-4" style="max-width: 31.3%;display: inline-block;">
                                <label for="name" class="text-sm text-muted"><i class="iconfont icon-denglu"></i> 昵称</label>
                                <div class="">
                                    <input type="text" class="form-control text-sm" name="author" value="<?php $this->remember('author'); ?>">
                                </div>
                            </div>
							<div class="col-4" style="max-width: 31.3%;display: inline-block;">
                               <label for="name" class="text-sm text-muted"><i class="iconfont icon-guanfangbanben"></i> 邮箱</label>
                                <div class="">
                                    <input type="text" class="form-control text-sm" id="name" name="mail" value="<?php $this->remember('mail'); ?>">
                                </div>
                            </div>
							<div class="col-4" style="max-width: 31.3%;display: inline-block;">
                                <label for="name" class="text-sm text-muted"><i class="iconfont icon-tag"></i> 网址</label>
                                <div class="">
                                    <input type="text" class="form-control text-sm" id="name" name="url" value="<?php $this->remember('url'); ?>">
                                </div>
                            </div> <?php endif; ?>
<div class="col-12" style="max-width: 93.9%;margin-right: 0;padding-right: 0;">
                                <label for="desc" class="text-sm text-muted"><i class="iconfont icon-message"></i> 内容</label>
                                    <textarea class="form-control text-sm" id="description" name="text" rows="3"><?php $this->remember('text'); ?></textarea>
                            </div>
<a type="submit" class="submit m-submit-p btn-edit-profile" style="color:#fff"><i class="iconfont icon-jiahao1"></i></a>
<?php $security = $this->widget('Widget_Security'); ?>
            <input type="hidden" name="_" value="<?php echo $security->getToken($this->request->getReferer())?>">
    </form>
    <?php $this->comments()->to($comments); ?>
        <?php while($comments->next()): ?>
		<div class="col-12">
		<article class="d-flex flex-fill py-4 comment-body" id="<?php $comments->theId(); ?>">
                                <div class="comment-avatar-author avatar border rounded-circle w-40 mr-3 vcard">
                                	<?php $comments->gravatar('38', ''); ?></div>
                                <div class="flex-fill flex-column comment-text">
                                    <div class="d-flex align-items-center comment-info mb-2">
                                        <div class="text-sm"><span class="comment-author text-secondary"><?php $comments->author(); ?></span><i class="text-primary mx-2" style="font-style:normal">•</i><time class="comment-date text-muted"><?php $comments->date('Y-m-d H:i:s'); ?></time></div>
                                    </div>
									<div class="comment-content">
                                        <div class="nc-light-gallery"><?php $comments->content(); ?></div>
                                    </div>
                                </div>
                            </article></div>
	<?php endwhile; ?>
</div></div></div><?php endif; ?>