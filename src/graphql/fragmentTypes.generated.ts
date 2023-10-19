/* eslint-disable */

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "DeliveryMethod": [
      "ShippingMethod",
      "Warehouse"
    ],
    "Event": [
      "AccountChangeEmailRequested",
      "AccountConfirmationRequested",
      "AccountConfirmed",
      "AccountDeleteRequested",
      "AddressCreated",
      "AddressDeleted",
      "AddressUpdated",
      "AppDeleted",
      "AppInstalled",
      "AppStatusChanged",
      "AppUpdated",
      "AttributeCreated",
      "AttributeDeleted",
      "AttributeUpdated",
      "AttributeValueCreated",
      "AttributeValueDeleted",
      "AttributeValueUpdated",
      "CalculateTaxes",
      "CategoryCreated",
      "CategoryDeleted",
      "CategoryUpdated",
      "ChannelCreated",
      "ChannelDeleted",
      "ChannelMetadataUpdated",
      "ChannelStatusChanged",
      "ChannelUpdated",
      "CheckoutCreated",
      "CheckoutFilterShippingMethods",
      "CheckoutFullyPaid",
      "CheckoutMetadataUpdated",
      "CheckoutUpdated",
      "CollectionCreated",
      "CollectionDeleted",
      "CollectionMetadataUpdated",
      "CollectionUpdated",
      "CustomerCreated",
      "CustomerMetadataUpdated",
      "CustomerUpdated",
      "DraftOrderCreated",
      "DraftOrderDeleted",
      "DraftOrderUpdated",
      "FulfillmentApproved",
      "FulfillmentCanceled",
      "FulfillmentCreated",
      "FulfillmentMetadataUpdated",
      "GiftCardCreated",
      "GiftCardDeleted",
      "GiftCardMetadataUpdated",
      "GiftCardSent",
      "GiftCardStatusChanged",
      "GiftCardUpdated",
      "InvoiceDeleted",
      "InvoiceRequested",
      "InvoiceSent",
      "MenuCreated",
      "MenuDeleted",
      "MenuItemCreated",
      "MenuItemDeleted",
      "MenuItemUpdated",
      "MenuUpdated",
      "OrderBulkCreated",
      "OrderCancelled",
      "OrderConfirmed",
      "OrderCreated",
      "OrderExpired",
      "OrderFilterShippingMethods",
      "OrderFulfilled",
      "OrderFullyPaid",
      "OrderFullyRefunded",
      "OrderMetadataUpdated",
      "OrderPaid",
      "OrderRefunded",
      "OrderUpdated",
      "PageCreated",
      "PageDeleted",
      "PageTypeCreated",
      "PageTypeDeleted",
      "PageTypeUpdated",
      "PageUpdated",
      "PaymentAuthorize",
      "PaymentCaptureEvent",
      "PaymentConfirmEvent",
      "PaymentGatewayInitializeSession",
      "PaymentListGateways",
      "PaymentProcessEvent",
      "PaymentRefundEvent",
      "PaymentVoidEvent",
      "PermissionGroupCreated",
      "PermissionGroupDeleted",
      "PermissionGroupUpdated",
      "ProductCreated",
      "ProductDeleted",
      "ProductMediaCreated",
      "ProductMediaDeleted",
      "ProductMediaUpdated",
      "ProductMetadataUpdated",
      "ProductUpdated",
      "ProductVariantBackInStock",
      "ProductVariantCreated",
      "ProductVariantDeleted",
      "ProductVariantMetadataUpdated",
      "ProductVariantOutOfStock",
      "ProductVariantStockUpdated",
      "ProductVariantUpdated",
      "SaleCreated",
      "SaleDeleted",
      "SaleToggle",
      "SaleUpdated",
      "ShippingListMethodsForCheckout",
      "ShippingPriceCreated",
      "ShippingPriceDeleted",
      "ShippingPriceUpdated",
      "ShippingZoneCreated",
      "ShippingZoneDeleted",
      "ShippingZoneMetadataUpdated",
      "ShippingZoneUpdated",
      "ShopMetadataUpdated",
      "StaffCreated",
      "StaffDeleted",
      "StaffUpdated",
      "ThumbnailCreated",
      "TransactionCancelationRequested",
      "TransactionChargeRequested",
      "TransactionInitializeSession",
      "TransactionItemMetadataUpdated",
      "TransactionProcessSession",
      "TransactionRefundRequested",
      "TranslationCreated",
      "TranslationUpdated",
      "VoucherCreated",
      "VoucherDeleted",
      "VoucherMetadataUpdated",
      "VoucherUpdated",
      "WarehouseCreated",
      "WarehouseDeleted",
      "WarehouseMetadataUpdated",
      "WarehouseUpdated"
    ],
    "IssuingPrincipal": [
      "App",
      "User"
    ],
    "Job": [
      "AppInstallation",
      "ExportFile",
      "Invoice"
    ],
    "Node": [
      "Address",
      "Allocation",
      "App",
      "AppExtension",
      "AppInstallation",
      "AppToken",
      "Attribute",
      "AttributeTranslatableContent",
      "AttributeTranslation",
      "AttributeValue",
      "AttributeValueTranslatableContent",
      "AttributeValueTranslation",
      "Category",
      "CategoryTranslatableContent",
      "CategoryTranslation",
      "Channel",
      "Checkout",
      "CheckoutLine",
      "Collection",
      "CollectionChannelListing",
      "CollectionTranslatableContent",
      "CollectionTranslation",
      "CustomerEvent",
      "DigitalContent",
      "DigitalContentUrl",
      "EventDelivery",
      "EventDeliveryAttempt",
      "ExportEvent",
      "ExportFile",
      "Fulfillment",
      "FulfillmentLine",
      "GiftCard",
      "GiftCardEvent",
      "GiftCardTag",
      "Group",
      "Invoice",
      "Menu",
      "MenuItem",
      "MenuItemTranslatableContent",
      "MenuItemTranslation",
      "Order",
      "OrderDiscount",
      "OrderEvent",
      "OrderLine",
      "Page",
      "PageTranslatableContent",
      "PageTranslation",
      "PageType",
      "Payment",
      "Product",
      "ProductChannelListing",
      "ProductMedia",
      "ProductTranslatableContent",
      "ProductTranslation",
      "ProductType",
      "ProductVariant",
      "ProductVariantChannelListing",
      "ProductVariantTranslatableContent",
      "ProductVariantTranslation",
      "Sale",
      "SaleChannelListing",
      "SaleTranslatableContent",
      "SaleTranslation",
      "ShippingMethod",
      "ShippingMethodChannelListing",
      "ShippingMethodPostalCodeRule",
      "ShippingMethodTranslatableContent",
      "ShippingMethodTranslation",
      "ShippingMethodType",
      "ShippingZone",
      "ShopTranslation",
      "StaffNotificationRecipient",
      "Stock",
      "TaxClass",
      "TaxConfiguration",
      "Transaction",
      "TransactionEvent",
      "TransactionItem",
      "User",
      "Voucher",
      "VoucherChannelListing",
      "VoucherTranslatableContent",
      "VoucherTranslation",
      "Warehouse",
      "Webhook"
    ],
    "ObjectWithMetadata": [
      "Address",
      "App",
      "Attribute",
      "Category",
      "Channel",
      "Checkout",
      "CheckoutLine",
      "Collection",
      "DigitalContent",
      "Fulfillment",
      "GiftCard",
      "Invoice",
      "Menu",
      "MenuItem",
      "Order",
      "OrderLine",
      "Page",
      "PageType",
      "Payment",
      "Product",
      "ProductMedia",
      "ProductType",
      "ProductVariant",
      "Sale",
      "ShippingMethod",
      "ShippingMethodType",
      "ShippingZone",
      "Shop",
      "TaxClass",
      "TaxConfiguration",
      "TransactionItem",
      "User",
      "Voucher",
      "Warehouse"
    ],
    "OrderOrCheckout": [
      "Checkout",
      "Order"
    ],
    "TaxSourceLine": [
      "CheckoutLine",
      "OrderLine"
    ],
    "TaxSourceObject": [
      "Checkout",
      "Order"
    ],
    "TranslatableItem": [
      "AttributeTranslatableContent",
      "AttributeValueTranslatableContent",
      "CategoryTranslatableContent",
      "CollectionTranslatableContent",
      "MenuItemTranslatableContent",
      "PageTranslatableContent",
      "ProductTranslatableContent",
      "ProductVariantTranslatableContent",
      "SaleTranslatableContent",
      "ShippingMethodTranslatableContent",
      "VoucherTranslatableContent"
    ],
    "TranslationTypes": [
      "AttributeTranslation",
      "AttributeValueTranslation",
      "CategoryTranslation",
      "CollectionTranslation",
      "MenuItemTranslation",
      "PageTranslation",
      "ProductTranslation",
      "ProductVariantTranslation",
      "SaleTranslation",
      "ShippingMethodTranslation",
      "VoucherTranslation"
    ],
    "UserOrApp": [
      "App",
      "User"
    ],
    "_Entity": [
      "Address",
      "App",
      "Category",
      "Collection",
      "Group",
      "Order",
      "PageType",
      "Product",
      "ProductMedia",
      "ProductType",
      "ProductVariant",
      "User"
    ]
  }
};
      export default result;
    