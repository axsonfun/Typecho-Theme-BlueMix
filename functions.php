<?php
function themeConfig($form) {
	$logo = new Typecho_Widget_Helper_Form_Element_Text('logo', NULL, NULL, _t('LOGO'), _t(''));
    $form->addInput($logo);
	$favico = new Typecho_Widget_Helper_Form_Element_Text('favico', NULL, NULL, _t('favico'), _t(''));
    $form->addInput($favico);
	$miaoshu = new Typecho_Widget_Helper_Form_Element_Text('miaosu', NULL, NULL, _t('描述'), _t(''));
    $form->addInput($miaoshu);
	$guanjianci = new Typecho_Widget_Helper_Form_Element_Text('guanjianci', NULL, NULL, _t('关键词'), _t(''));
    $form->addInput($guanjianci);
	$dibu = new Typecho_Widget_Helper_Form_Element_Text('dibu', NULL, NULL, _t('底部版权'), _t(''));
    $form->addInput($dibu);
	$beian = new Typecho_Widget_Helper_Form_Element_Text('beian', NULL, NULL, _t('ICP备案'), _t(''));
    $form->addInput($beian);
	$diicon = new Typecho_Widget_Helper_Form_Element_Text('diicon', NULL, NULL, _t('底部图标'), _t(''));
    $form->addInput($diicon);
	$guanggao = new Typecho_Widget_Helper_Form_Element_Text('guanggao', NULL, NULL, _t('文章广告位'), _t(''));
    $form->addInput($guanggao);
	$solink = new Typecho_Widget_Helper_Form_Element_Text('solink', NULL, NULL, _t('搜索链接'), _t(''));
    $form->addInput($solink);
	$stbt = new Typecho_Widget_Helper_Form_Element_Text('stbt', NULL, NULL, _t('首推标题'), _t(''));
    $form->addInput($stbt);
	$sttt = new Typecho_Widget_Helper_Form_Element_Text('sttt', NULL, NULL, _t('首推头图'), _t(''));
    $form->addInput($sttt);
	$stlj = new Typecho_Widget_Helper_Form_Element_Text('stlj', NULL, NULL, _t('首推链接'), _t(''));
    $form->addInput($stlj);
	$shoutu = new Typecho_Widget_Helper_Form_Element_Text('shoutu', NULL, NULL, _t('首页图片'), _t(''));
    $form->addInput($shoutu);
	$noshoutu = new Typecho_Widget_Helper_Form_Element_Text('noshoutu', NULL, NULL, _t('404图片'), _t(''));
    $form->addInput($noshoutu);
	$flshoutu = new Typecho_Widget_Helper_Form_Element_Text('flshoutu', NULL, NULL, _t('分类图片'), _t(''));
    $form->addInput($flshoutu);
	$ssshoutu = new Typecho_Widget_Helper_Form_Element_Text('ssshoutu', NULL, NULL, _t('搜索图片'), _t(''));
    $form->addInput($ssshoutu);
	$shouju = new Typecho_Widget_Helper_Form_Element_Text('shouju', NULL, NULL, _t('首页简要'), _t(''));
    $form->addInput($shouju);
	$nicheng = new Typecho_Widget_Helper_Form_Element_Text('nicheng', NULL, NULL, _t('作者昵称'), _t(''));
    $form->addInput($nicheng);
	$touxiang = new Typecho_Widget_Helper_Form_Element_Text('touxiang', NULL, NULL, _t('作者头像'), _t(''));
    $form->addInput($touxiang);
	$geqian = new Typecho_Widget_Helper_Form_Element_Text('geqian', NULL, NULL, _t('个性签名'), _t(''));
    $form->addInput($geqian);
}
function themeFields($layout) {
    $toutu = new Typecho_Widget_Helper_Form_Element_Text('toutu', NULL, NULL, _t('文章头图'), _t(''));
    $layout->addItem($toutu);
	$guanjianci = new Typecho_Widget_Helper_Form_Element_Text('guanjianci', NULL, NULL, _t('关键词'), _t(''));
    $layout->addItem($guanjianci);
	$miaoshu = new Typecho_Widget_Helper_Form_Element_Text('miaosu', NULL, NULL, _t('描述'), _t(''));
    $layout->addItem($miaoshu);
	$jianyao = new Typecho_Widget_Helper_Form_Element_Text('jianyao', NULL, NULL, _t('简要'), _t(''));
    $layout->addItem($jianyao);
}
function getRandomPosts($limit = 5){    
    $db = Typecho_Db::get();
    $result = $db->fetchAll($db->select()->from('table.contents')
		->where('status = ?','publish')
		->where('type = ?', 'post')
		->where('created <= unix_timestamp(now())', 'post')
		->limit($limit)
		->order('RAND()')
	);
	if($result){
		$i=1;
		foreach($result as $val){
			if($i<=3){
				$var = ' class="red"';
			}else{
				$var = '';
			}
			$val = Typecho_Widget::widget('Widget_Abstract_Contents')->push($val);
			$post_title = htmlspecialchars($val['title']);
			$permalink = $val['permalink'];
			echo '<li><h2 class="text-sm text-l1"><a href="'.$permalink.'" title="'.$post_title.'">'.$post_title.'</a></h2></li>';
			$i++;
		}
	}
}
?>