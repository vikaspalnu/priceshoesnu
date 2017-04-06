<?php
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Magento\Enterprise;

class CodeIntegrityTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @magentoConfigFixture current_store design/theme/theme_id 0
     */
    public function testGetConfigurationDesignThemeDefaults()
    {
        $design = \Magento\TestFramework\Helper\Bootstrap::getObjectManager()->create(
            'Magento\Theme\Model\View\Design'
        );
        $this->assertEquals('Magento/luma', $design->getConfigurationDesignTheme('frontend'));
        $this->assertEquals('Magento/backend', $design->getConfigurationDesignTheme('adminhtml'));
    }
}
