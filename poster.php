<section id="poster" class="popup"><div class="popup_overlay"></div><div class="popup-item" style="width: 300px!important;border-radius:10px"><div class="title" style="background:url(<?php $this->fields->toutu(); ?>) center;height: 200px;background-size: cover;width: 100%;border-radius:8px 8px 0 0;"><h5 class="h1 text-white" style="text-align: center!important;bottom: 0;left: 0;padding: 6px;background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));width: 300px;right: 0;margin-top: 130px;font-size: 20px;margin-left: -24px;"><?php $this->title() ?></h5></div><div class="content" style="text-align: center;background: #3a46ec;border-radius: 0 0 8px 8px;"><img class="border" src="https://api.qrserver.com/v1/create-qr-code/?size=128x128&amp;color=3a46ec&amp;margin=0&amp;data=<?php $this->permalink() ?>" style="width: 138px;height: 138px;border: 0px!important;border-radius: 8px;" alt=""><h5 style="color: #fff;font-size: 16px;text-align: center;margin-top:16px;margin-bottom: -16px;">扫描二维码阅读更多内容</h5></div><a onclick="document.getElementById('poster').className='popup';" class="m-submit-p btn-edit-profile" style="color:#fff;background: rgba(255, 255, 255, 0.5);border-radius: 50%;padding: 4px 3px 2px 3px;"><i class="iconfont icon-guanbi1"></i></a></div></section>