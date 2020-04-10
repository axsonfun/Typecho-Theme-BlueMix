<?php
/**
 * 归档页面
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
                    <h1 class="h1 text-white" style="text-align: center!important;position: absolute;bottom: 0;left: 0;padding: 20px 10px 2em;right: 0;background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));margin-bottom: 0rem;">ARCHIVES FILE</h1>
					<p class="text-lg font-theme text-white text-md" style="text-align: center!important;position: absolute;bottom: 0;left: 0;padding: 20px 10px 2em;right: 0;background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));margin-bottom: 0rem;"><?php $this->fields->jianyao(); ?></p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="bg-white py-5">
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-md-12">
                <div class="update-logs-line" id="logsline">			
					<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit;
    $this->widget('Widget_Contents_Post_Recent', 'pageSize=10000')->to($archives);   
    $year=0; $mon=0; $i=0; $j=0;   
    $output = '';   
    while($archives->next()):   
        $year_tmp = date('Y',$archives->created);   
        $mon_tmp = date('n',$archives->created);   
        $y=$year; $m=$mon;
		      if ($year != $year_tmp && $year > 0) $output .= ''; 
 if ($mon != $mon_tmp && $mon > 0) $output .= '</div></div></div></div></div>';   
if ($year != $year_tmp) {   
            $year = $year_tmp;   
            $output .= '<div class="logs-line-item active" style="pointer-events:none"><div class="logs-line-dot "></div><div class="logs-line-content"><div class="logs-line-date font-theme text-lg" id="header-log-'.  $year .'"><div class="" data-toggle="collapse" data-target="#collapse-log-'.  $year .'" aria-expanded="true" aria-controls="collapse-log-'.  $year .'">'. $year .' 年</div></div><div id="collapse-log-'.  $year .'" class="collapse show" aria-labelledby="header-log-'.  $year .'" data-parent="#logsline" style=""><div class="text-muted text-sm pt-2 list-decimal"><div class="nc-light-gallery"></div></div></div></div></div>';   
}
		if ($mon != $mon_tmp) {   
            $mon = $mon_tmp;   
            $output .= '<div class="logs-line-item"><div class="logs-line-dot"></div><div class="logs-line-content"><div class="logs-line-date font-theme text-lg" id="header-log-'. $mon. $year .'"><div class="" data-toggle="collapse" data-target="#collapse-log-'. $mon. $year .'" aria-expanded="true" aria-controls="collapse-log-'. $mon. $year .'">'. $mon .' 月</div></div><div id="collapse-log-'. $mon. $year .'" class="collapse" aria-labelledby="header-log-'. $mon. $year .'" data-parent="#logsline" style=""><div class="text-muted text-sm pt-2 list-decimal"><div class="nc-light-gallery">'; //输出月份   
        } 
        $output .= '<ol><li>'.date('j日: ',$archives->created).'<a href="'.$archives->permalink .'">'. $archives->title .'</a></li></ol>'; 
    endwhile;   
    $output .= '</div></div></div></div></div>';
    echo $output;
?>
                </div>
            </div>
            
        </div>
    </div>
</section>

<?php include('footer.php'); ?>