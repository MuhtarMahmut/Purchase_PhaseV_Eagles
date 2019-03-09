@Regression @Muhtar
  Feature: Muhtars 5 test cases

    Scenario: default page from the purchase moudle is Request for Quotation page.
      Then Page title should contain "Requests for Qu"

    Scenario: Header’s of Quotation page and selected link’s name has to match.
      Then Header’s of Quotation page equals link's title

    Scenario: Purchase orders page should be clickable and accessible.
      Then click the purchaseOrder
      Then Page title should contain "Purchase Orders"


    Scenario: Total tax value should be subtotal times tax rate in creating purchase orders
      When click the purchaseOrder
      And  when user click create button
      Then Click the Add an Item
      Then should be able to select item from Product Drop Down Box
      Then Eneter "200" to Unit Price box
      * Total tax should equal to Subtotal * Tax rate;


    Scenario: Total price should be equal to the sum of subtotal and Taxes Amount
      When click the purchaseOrder
      And  when user click create button
      Then Click the Add an Item
      Then should be able to select item from Product Drop Down Box
      Then Eneter "200" to Unit Price box
      * Total Price = subtotal + Taxes amount

