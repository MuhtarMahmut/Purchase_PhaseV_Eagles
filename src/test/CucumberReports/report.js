$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/CucumberFeatures/Ihtibar.feature");
formatter.feature({
  "name": "Ihtibars 5 Test cases",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Ihtibar"
    }
  ]
});
formatter.scenario({
  "name": "Verify that reference check-box should be able to select all products.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Ihtibar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "click the Reference check box",
  "keyword": "When "
});
formatter.match({
  "location": "IhtibarsSteps.click_the_Reference_check_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All check boxes will be selected",
  "keyword": "Then "
});
formatter.match({
  "location": "IhtibarsSteps.all_check_boxes_will_be_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that reference check-box should be able to Deselect all products.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Ihtibar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "click the Reference check box",
  "keyword": "When "
});
formatter.match({
  "location": "IhtibarsSteps.click_the_Reference_check_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the Reference check box again",
  "keyword": "And "
});
formatter.match({
  "location": "IhtibarsSteps.click_the_Reference_check_box_again()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All check boxes will be deselected.",
  "keyword": "Then "
});
formatter.match({
  "location": "IhtibarsSteps.all_check_boxes_will_be_deselected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that each products should be selectable separately.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Ihtibar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "click the each products check box.",
  "keyword": "When "
});
formatter.match({
  "location": "IhtibarsSteps.click_the_each_products_check_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each products check box will be selected.",
  "keyword": "Then "
});
formatter.match({
  "location": "IhtibarsSteps.each_products_check_box_will_be_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that sum of Untaxed balances should equal to total balance shown at the blow.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Ihtibar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "sum of all untexted amount equal to the total balance shown at the end.",
  "keyword": "Then "
});
formatter.match({
  "location": "IhtibarsSteps.sum_of_all_untexted_amount_equal_to_the_total_balance_shown_at_the_end()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that each Vendors’ name on the table should be same with vendor’name on the receipt.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Ihtibar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "each vendor\u0027s name on table matches with thier name on recipe.",
  "keyword": "Then "
});
formatter.match({
  "location": "IhtibarsSteps.each_vendor_s_name_on_table_matches_with_thier_name_on_recipe()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/CucumberFeatures/Imran.feature");
formatter.feature({
  "name": "Imran\u0027s 5 test cases",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Imran"
    }
  ]
});
formatter.scenario({
  "name": "User should not be able to create Request for Quotation without selecting the vendor",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Imran"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "when user click create button",
  "keyword": "And "
});
formatter.match({
  "location": "ShehlasSteps.when_user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the save buttons",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_the_save_buttons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message will be displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.the_error_message_will_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to Add Item when creating Request for quotation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Imran"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "when user click create button",
  "keyword": "And "
});
formatter.match({
  "location": "ShehlasSteps.when_user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Add an Item",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_the_Add_an_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new subtotal should be dispayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.new_subtotal_should_be_dispayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The default unit price box should be empty when creating Request for quotation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Imran"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "when user click create button",
  "keyword": "And "
});
formatter.match({
  "location": "ShehlasSteps.when_user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Add an Item",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_the_Add_an_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should be able to select item from Product Drop Down Box",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.should_be_able_to_select_item_from_Product_Drop_Down_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Unit Price Box should be Empty",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.the_Unit_Price_Box_should_be_Empty()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Should be able to delete the added item when creating Request for quotation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Imran"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "when user click create button",
  "keyword": "And "
});
formatter.match({
  "location": "ShehlasSteps.when_user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Add an Item",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_the_Add_an_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should be able to select item from Product Drop Down Box",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.should_be_able_to_select_item_from_Product_Drop_Down_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete The item",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.delete_The_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "should be able to save the Requast when creating Request for quotation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Imran"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "when user click create button",
  "keyword": "And "
});
formatter.match({
  "location": "ShehlasSteps.when_user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Add an Item",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_the_Add_an_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should be able to select item from Product Drop Down Box",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.should_be_able_to_select_item_from_Product_Drop_Down_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click The Vendor drop down box and select random vendor",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_The_Vendor_drop_down_box_and_select_random_vendor()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the save buttons",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_the_save_buttons()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/CucumberFeatures/Muhtar.feature");
formatter.feature({
  "name": "Muhtars 5 test cases",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Muhtar"
    }
  ]
});
formatter.scenario({
  "name": "default page from the purchase moudle is Request for Quotation page.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Muhtar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Page title should contain \"Requests for Qu\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ZohrajansSteps.page_title_should_contain(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Header’s of Quotation page and selected link’s name has to match.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Muhtar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Header’s of Quotation page equals link\u0027s title",
  "keyword": "Then "
});
formatter.match({
  "location": "MuhtarsSteps.header_s_of_Quotation_page_equals_link_s_title()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Purchase orders page should be clickable and accessible.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Muhtar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "click the purchaseOrder",
  "keyword": "Then "
});
formatter.match({
  "location": "RayisasSteps.click_the_purchaseOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should contain \"Purchase Orders\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ZohrajansSteps.page_title_should_contain(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Total tax value should be subtotal times tax rate in creating purchase orders",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Muhtar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "click the purchaseOrder",
  "keyword": "When "
});
formatter.match({
  "location": "RayisasSteps.click_the_purchaseOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "when user click create button",
  "keyword": "And "
});
formatter.match({
  "location": "ShehlasSteps.when_user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Add an Item",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_the_Add_an_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should be able to select item from Product Drop Down Box",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.should_be_able_to_select_item_from_Product_Drop_Down_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eneter \"200\" to Unit Price box",
  "keyword": "Then "
});
formatter.match({
  "location": "MuhtarsSteps.eneter_to_Unit_Price_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Total tax should equal to Subtotal * Tax rate;",
  "keyword": "* "
});
formatter.match({
  "location": "MuhtarsSteps.total_tax_should_equal_to_Subtotal_Tax_rate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Total price should be equal to the sum of subtotal and Taxes Amount",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Muhtar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "click the purchaseOrder",
  "keyword": "When "
});
formatter.match({
  "location": "RayisasSteps.click_the_purchaseOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "when user click create button",
  "keyword": "And "
});
formatter.match({
  "location": "ShehlasSteps.when_user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Add an Item",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_the_Add_an_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should be able to select item from Product Drop Down Box",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.should_be_able_to_select_item_from_Product_Drop_Down_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eneter \"200\" to Unit Price box",
  "keyword": "Then "
});
formatter.match({
  "location": "MuhtarsSteps.eneter_to_Unit_Price_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Total Price \u003d subtotal + Taxes amount",
  "keyword": "* "
});
formatter.match({
  "location": "MuhtarsSteps.total_Price_subtotal_Taxes_amount()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/CucumberFeatures/Rayisa.feature");
formatter.feature({
  "name": "Rayisa\u0027s 5 steps",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Rayisa"
    }
  ]
});
formatter.scenario({
  "name": "Should be able to add multiple items in the creating purchase order.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Rayisa"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "click the purchaseOrder",
  "keyword": "When "
});
formatter.match({
  "location": "RayisasSteps.click_the_purchaseOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "when user click create button",
  "keyword": "And "
});
formatter.match({
  "location": "ShehlasSteps.when_user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Add an Item",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_the_Add_an_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should be able to select item from Product Drop Down Box",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.should_be_able_to_select_item_from_Product_Drop_Down_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Add an Item",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_the_Add_an_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Default tax should be 0 when creating purchase order",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Rayisa"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "click the purchaseOrder",
  "keyword": "When "
});
formatter.match({
  "location": "RayisasSteps.click_the_purchaseOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "when user click create button",
  "keyword": "And "
});
formatter.match({
  "location": "ShehlasSteps.when_user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Add an Item",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_the_Add_an_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The default teax should be 0",
  "keyword": "Then "
});
formatter.match({
  "location": "RayisasSteps.the_default_teax_should_be(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Quantity box should be Empty in creating purchase orders.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Rayisa"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "click the purchaseOrder",
  "keyword": "When "
});
formatter.match({
  "location": "RayisasSteps.click_the_purchaseOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "when user click create button",
  "keyword": "And "
});
formatter.match({
  "location": "ShehlasSteps.when_user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Add an Item",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_the_Add_an_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should be able to select item from Product Drop Down Box",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.should_be_able_to_select_item_from_Product_Drop_Down_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Qunatity box should be empty.",
  "keyword": "Then "
});
formatter.match({
  "location": "RayisasSteps.qunatity_box_should_be_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Rcieved Quantity should be 0 in creating purchase orders",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Rayisa"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "click the purchaseOrder",
  "keyword": "When "
});
formatter.match({
  "location": "RayisasSteps.click_the_purchaseOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "when user click create button",
  "keyword": "And "
});
formatter.match({
  "location": "ShehlasSteps.when_user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Add an Item",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_the_Add_an_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should be able to select item from Product Drop Down Box",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.should_be_able_to_select_item_from_Product_Drop_Down_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Received Quantity should be equal to 0.",
  "keyword": "Then "
});
formatter.match({
  "location": "RayisasSteps.received_Quantity_should_be_equal_to(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Billed Quantity should be 0 in creating purchase orders",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Rayisa"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "click the purchaseOrder",
  "keyword": "When "
});
formatter.match({
  "location": "RayisasSteps.click_the_purchaseOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "when user click create button",
  "keyword": "And "
});
formatter.match({
  "location": "ShehlasSteps.when_user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Add an Item",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.click_the_Add_an_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should be able to select item from Product Drop Down Box",
  "keyword": "Then "
});
formatter.match({
  "location": "ImransSteps.should_be_able_to_select_item_from_Product_Drop_Down_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Billed Quantity should be equal to 0.",
  "keyword": "Then "
});
formatter.match({
  "location": "RayisasSteps.billed_Quantity_should_be_equal_to(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/CucumberFeatures/Shehla.feature");
formatter.feature({
  "name": "Shehlas 5 steps",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Shehla"
    }
  ]
});
formatter.scenario({
  "name": "login as a manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Shehla"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click Requests for Quotation",
  "keyword": "When "
});
formatter.match({
  "location": "ShehlasSteps.user_click_Requests_for_Quotation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see create button",
  "keyword": "Then "
});
formatter.match({
  "location": "ShehlasSteps.user_should_see_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "when user click create button",
  "keyword": "And "
});
formatter.match({
  "location": "ShehlasSteps.when_user_click_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the order page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "ShehlasSteps.the_order_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify product info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Shehla"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click product button",
  "keyword": "When "
});
formatter.match({
  "location": "ShehlasSteps.user_click_product_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see product page",
  "keyword": "Then "
});
formatter.match({
  "location": "ShehlasSteps.user_should_see_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product details should display",
  "keyword": "Then "
});
formatter.match({
  "location": "ShehlasSteps.the_product_details_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Product Should Match With Infos Shown On ProductPage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Shehla"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click the Products link",
  "keyword": "When "
});
formatter.match({
  "location": "ZohrajansSteps.click_the_Products_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click product box",
  "keyword": "Then "
});
formatter.match({
  "location": "ShehlasSteps.click_product_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "products info should match",
  "keyword": "Then "
});
formatter.match({
  "location": "ShehlasSteps.products_info_should_match()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Sales Price of the product Can Be Updated By TheManeger",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Shehla"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click the Products link",
  "keyword": "When "
});
formatter.match({
  "location": "ZohrajansSteps.click_the_Products_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click product box",
  "keyword": "Then "
});
formatter.match({
  "location": "ShehlasSteps.click_product_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Edit Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ShehlasSteps.click_Edit_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"700\" to salex price box",
  "keyword": "And "
});
formatter.match({
  "location": "ShehlasSteps.enter_to_salex_price_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "ShehlasSteps.click_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that vendor page should be cliakcable:",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Shehla"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click Vendor page.",
  "keyword": "When "
});
formatter.match({
  "location": "ShehlasSteps.click_Vendor_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should contain \"Vendor\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ZohrajansSteps.page_title_should_contain(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/CucumberFeatures/Zohrajan.feature");
formatter.feature({
  "name": "Zohras 5 test cases",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Zohrajan"
    }
  ]
});
formatter.scenario({
  "name": "Vendor bills page should be clickable and accessible",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Zohrajan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click Vendor Bill link.",
  "keyword": "When "
});
formatter.match({
  "location": "ZohrajansSteps.click_Vendor_Bill_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should contain \"Vendor Bil\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ZohrajansSteps.page_title_should_contain(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Incoming products page should be clickable and accessible",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Zohrajan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click the Incoming Products",
  "keyword": "When "
});
formatter.match({
  "location": "ZohrajansSteps.click_the_Incoming_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should contain \"Incoming Produc\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ZohrajansSteps.page_title_should_contain(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Products page should be clickable and accessible",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Zohrajan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click the Products link",
  "keyword": "When "
});
formatter.match({
  "location": "ZohrajansSteps.click_the_Products_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should contain \"Produc\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ZohrajansSteps.page_title_should_contain(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "when the manager tries delete an incoming product , system should ask to make sure again.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Zohrajan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click the Incoming Products",
  "keyword": "When "
});
formatter.match({
  "location": "ZohrajansSteps.click_the_Incoming_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the Random product",
  "keyword": "Then "
});
formatter.match({
  "location": "ZohrajansSteps.select_the_Random_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the action button.",
  "keyword": "Then "
});
formatter.match({
  "location": "ZohrajansSteps.click_the_action_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the delete",
  "keyword": "And "
});
formatter.match({
  "location": "ZohrajansSteps.select_the_delete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmation window will pup up",
  "keyword": "Then "
});
formatter.match({
  "location": "ZohrajansSteps.confirmation_window_will_pup_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "When selecting\" expecting \"date check-box , all the items check box has to be Selected.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Zohrajan"
    },
    {
      "name": "@5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click the Incoming Products",
  "keyword": "When "
});
formatter.match({
  "location": "ZohrajansSteps.click_the_Incoming_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the expected date check box",
  "keyword": "Then "
});
formatter.match({
  "location": "ZohrajansSteps.click_the_expected_date_check_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all check boxes will be selected.",
  "keyword": "Then "
});
formatter.match({
  "location": "ZohrajansSteps.all_check_boxes_will_be_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});