// @ts-strict-ignore
import { Box } from "@saleor/macaw-ui/next";
import React, { memo, useEffect, useState } from "react";
import axios from "axios";

import { PackageCard } from "./PackageCard";
import { ServiceCard } from "./ServiceCard";
import { MetadataCardProps } from "../Metadata";

export interface MetadataProps
  extends Omit<MetadataCardProps, "data" | "isPrivate"> {
  data: Record<"metadata" | "privateMetadata", any[]>;
  isLoading?: boolean;
  orderId: string;
  setPackages: any;
  setServices: any;
  setPackageType: any;
  setServiceType: any;
  packages: any[];
  services: any[];
  packageType: string;
  serviceType: string;
}

const propsCompare = (_, newProps: MetadataProps) => {
  /**
    If we pass `isLoading` render only when the loading finishes
  */
  if (typeof newProps.isLoading !== "undefined") {
    return newProps.isLoading;
  }

  /*
    If `isLoading` is not present, keep the old behavior
  */
  return false;
};

export const Package: React.FC<MetadataProps> = memo(({ data, packages, services, setPackages, setServices, setPackageType, setServiceType, packageType, serviceType, orderId }) => {
  const handleCalculate = () => {
    const data = {
      "lines": packages,
      "packagingType": packageType,
      "order_token": orderId
    };
    axios.post("http://192.168.118.227:8000/webhooks/rate_estimate", data).then((res: any) => {
      setServices(res?.data.methods);
    })
  }

  const handlePackageChange = (event, id) => {
    setPackages(packages.map(item => {
      if (item.id === id) {
        return { ...item, quantity: event.target.value };
      }

      return item;
    }));
  }

  const handleChangeWT = (event, id) => {
    setPackages(packages.map(item => {
      if (item.id === id) {
        return { ...item, weight_value: event.target.value };
      }

      return item;
    }));
  }

  const handleChangeL = (event, id) => {
    setPackages(packages.map(item => {
      if (item.id === id) {
        return { ...item, length: event.target.value };
      }

      return item;
    }));
  }

  const handleChangeW = (event, id) => {
    setPackages(packages.map(item => {
      if (item.id === id) {
        return { ...item, width: event.target.value };
      }

      return item;
    }));
  }

  const handleChangeH = (event, id) => {
    setPackages(packages.map(item => {
      if (item.id === id) {
        return { ...item, height: event.target.value };
      }

      return item;
    }));
  }

  const handleAddPackage = () => {
    setPackages([...packages, {
        "id": Date.now().toString(),
        "quantity": "",
        "weight_unit": "LB", 
        "weight_value": "",
        "length": "",
        "width": "",
        "height": ""
    }]);
  } 

  const handleRemovePackage = (id) => {
    setPackages(packages.filter(item => item.id !== id));
  }

  const handleSetServiceType = (type) => {
    setServiceType(type);
  }

  return (
    <Box display="grid" gap={2} paddingBottom={6}>
      <PackageCard
        data={packages}
        packageType={packageType}
        onPackageChange={handlePackageChange}
        onChangeWT={handleChangeWT}
        onChangeL={handleChangeL}
        onChangeW={handleChangeW}
        onChangeH={handleChangeH}
        onAddPackage={handleAddPackage}
        onRemovePackage={handleRemovePackage}
      />
      <ServiceCard
        data={services}
        packages={packages}
        serviceType={serviceType}
        setServiceType={handleSetServiceType}
        onCalculate={handleCalculate}
      />
    </Box>
  );
}, propsCompare);

Package.displayName = "Package";
