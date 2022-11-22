RunAction "AOS_Login [AOS_Actions]", oneIteration
RunAction "AOS_ProductOrder [AOS_Actions]", oneIteration
RunAction "SAP_Login [SAP_Units]", oneIteration
RunAction "VA01 [SAP_Units]", oneIteration, Parameter("AOS_ProductOrder [AOS_Actions]", "OrderNumber")
RunAction "SAP_Logout [SAP_Units]", oneIteration
RunAction "Shipping_Login [Shipping_Units]", oneIteration
RunAction "Shipping_OrderConfirmation [Shipping_Units]", oneIteration, Parameter("VA01 [SAP_Units]", "SAP_OrderApproved")
RunAction "Shipping_Logout [Shipping_Units]", oneIteration

