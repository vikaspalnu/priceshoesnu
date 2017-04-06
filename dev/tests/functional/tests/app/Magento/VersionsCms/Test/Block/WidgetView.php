<?php
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\VersionsCms\Test\Block;

use Magento\Widget\Test\Fixture\Widget;

/**
 * Widget view block on the index page
 */
class WidgetView extends \Magento\Widget\Test\Block\WidgetView
{
    /**
     * Widgets selectors
     *
     * @var array
     */
    protected $widgetSelectors = [
        'cmsHierarchyNodeLink' => '//a[contains(.,"%s")]',
    ];
}
