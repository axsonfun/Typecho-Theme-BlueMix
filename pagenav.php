<section class="bg-white pt-1 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-3 col-md-3">
			<div class="p-4">
                    <div class="d-flex align-items-center justify-content-center">
			<?php $this->pageLink('<span class="w-64 bg-theme text-white avatar" style="margin-top: 0;width: 48px!important;height: 48px!important;"><i class="text-xl iconfont icon-arrowleft"></i></span>'); ?>
                </div>
                </div>
            </div>
            <div class="col-6 col-md-6">
                <div class="p-4">
                    <div class="d-flex align-items-center justify-content-center"><?php if(ceil($this->getTotal() / $this->parameter->pageSize)>0): ?><span class="w-64 bg-theme text-white  avatar" style="width: 100px!important;border-radius: 500px;margin-top: 0;height: 48px!important;" onclick="document.getElementById('pagenav').className='popup popup-open';" ><?php if($this->_currentPage>0) echo $this->_currentPage.' / '; ?><?php echo ceil($this->getTotal() / $this->parameter->pageSize); ?></span><?php endif ?></div>
                </div>
            </div>
            <div class="col-3 col-md-3">
                <div class="p-4">
                    <div class="d-flex align-items-center justify-content-center"><?php $this->pageLink('<span class="w-64 bg-theme text-white  avatar" style="margin-top: 0;width: 48px!important;height: 48px!important;"><i class="text-xl iconfont icon-arrowright"></i></span>','next'); ?></div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php if(ceil($this->getTotal() / $this->parameter->pageSize)>0): ?><?php if($this->is('index')): ?><section id="pagenav" class="popup"><div class="popup_overlay"></div><div class="popup-item"><div class="title"><h5 class="pb-3">跳转至指定页面</h5></div><div class="content">
                                <input type="text" name="checkcode" class="form-control form-control-lg" id="pagenavinput" placeholder="输入需要跳转的页数" required="">
                       </div><div class="footer">
                    <div class="row row-sm my-n2">
                        <div class="col-12 col-lg-12 py-2">
							<a href="<?php $this->options->siteUrl(); ?>" class="btn btn-info-gradiant btn-lg btn-arrow btn-block" id="gopage" style="pointer-events: none;opacity: .5;"><span>马上跳转<i class="iconfont icon-xuanze"></i></span></a>
                    	</div>
</div></div><a onclick="document.getElementById('pagenav').className='popup';" class="m-submit-p btn-edit-profile" style="color:#fff"><i class="iconfont icon-guanbi1"></i></a></div></section>
<script type="text/javascript">
var text = document.getElementById("pagenavinput");
var aObj = document.getElementById("gopage");
text.onkeyup = function(){
this.value=this.value.replace(/\D/g,'');
aObj.style.pointerEvents = "all";
aObj.style.opacity = "1";
aObj.href = "<?php $this->options->siteUrl(); ?>page/"+text.value;
if(text.value><?php echo ceil($this->getTotal() / $this->parameter->pageSize); ?>){
text.value = <?php echo ceil($this->getTotal() / $this->parameter->pageSize); ?>;
aObj.href = "<?php $this->options->siteUrl(); ?>page/"+text.value;
};
if(text.value<1){
aObj.href = "javascript:volid(0);";
aObj.style.pointerEvents = "none";
aObj.style.opacity = ".5";
};
};
</script><?php endif ?><?php endif ?>