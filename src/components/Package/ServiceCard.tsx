import TableRowLink from "@dashboard/components/TableRowLink";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  Typography
} from "@material-ui/core";
import {
  Box,
  Button,
  ChervonDownIcon,
  ChervonUpIcon,
  Text,
  vars,
  RadioGroup
} from "@saleor/macaw-ui/next";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { DashboardCard } from "../Card";
import Skeleton from "../Skeleton";

export interface ServiceCardProps {
  data: any;
  packages: any;
  serviceType: string;
  setServiceType: (type) => void;
  onCalculate;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  data,
  packages,
  serviceType,
  setServiceType,
  onCalculate,
}) => {
  const intl = useIntl();
  const [expanded, setExpanded] = React.useState(true);
  console.log(data, "++++++++++");
  return (
    <DashboardCard
      data-test-id="metadata-editor"
      data-test-expanded={expanded}
      gap={1}
    >
      <DashboardCard.Title>
        <Box
          display="flex"
          justifyContent="flex-end"
          onClick={() => setExpanded(!expanded)}
          cursor="pointer"
        >
          {
            intl.formatMessage({
              id: "VcI+Zh1",
              defaultMessage: " ",
              description: "header",
            })
          }
          <Button
            variant="secondary"
            data-test-id="expand"
            type="button"
            icon={expanded ? <ChervonUpIcon /> : <ChervonDownIcon />}
          />
        </Box>
      </DashboardCard.Title>
      {data === undefined ? (
        <DashboardCard.Content>
          <Skeleton />
        </DashboardCard.Content>
      ) : (
        <>
          {expanded && (
            <>
              {data.length === 0 ? (
                <DashboardCard.Content>
                  <Text variant="caption" color="textNeutralSubdued">
                    <FormattedMessage
                      id="cY6H2C"
                      defaultMessage="No service created for this element."
                      description="empty service text"
                    />
                  </Text>
                </DashboardCard.Content>
              ) : (
                <RadioGroup
                  value={serviceType}
                  onValueChange={setServiceType}
                  display="flex"
                  
                  flexDirection="column"
                  gap={3}
                >
                  <Table>
                    <TableHead>
                      <TableRowLink>
                        <TableCell style={{ paddingLeft: vars.spacing[6] }}>
                          <Text variant="caption" color="textNeutralSubdued">
                            <FormattedMessage
                              id="nudPsY5"
                              defaultMessage="Select Service"
                              description="Select Service"
                            />
                          </Text>
                        </TableCell>
                        <TableCell style={{ paddingLeft: vars.spacing[6] }}>
                          <Text variant="caption" color="textNeutralSubdued">
                            <FormattedMessage
                              id="nudPsY6"
                              defaultMessage="Service Name"
                              description="Service Name"
                            />
                          </Text>
                        </TableCell>
                        <TableCell style={{ paddingLeft: vars.spacing[6] }}>
                          <Text variant="caption" color="textNeutralSubdued">
                            <FormattedMessage
                              id="nudPsY8"
                              defaultMessage="Cost ($)"
                              description="Cost ($)"
                            />
                          </Text>
                        </TableCell>
                        
                      </TableRowLink>
                    </TableHead>
                    <TableBody>
                        {data.map((field, fieldIndex) => (
                          <TableRowLink data-test-id="field" key={fieldIndex}>
                            <TableCell style={{ paddingLeft: vars.spacing[6] }}>
                              <RadioGroup.Item
                                id={`${fieldIndex}-isPublished-true`}
                                value={field.name}
                                name="isPublished"
                              >
                              </RadioGroup.Item>
                            </TableCell>
                            <TableCell style={{ paddingLeft: vars.spacing[6] }}>
                              <Typography variant="h6" component="h2">
                                {field.name}
                              </Typography>
                            </TableCell>
                            <TableCell style={{ paddingLeft: vars.spacing[6] }}>
                              <Typography variant="h6" component="h2">
                                {field.amount}
                              </Typography>
                            </TableCell>
                          </TableRowLink>
                        ))}
                    </TableBody>
                  </Table>
                </RadioGroup>
              )}
              <DashboardCard.Content marginTop={2} paddingLeft={6}>
                <Button
                  variant="secondary"
                  data-test-id="add-field"
                  type="button"
                  disabled={!packages || packages.length == 0}
                  onClick={onCalculate}
                >
                  <FormattedMessage
                    id="GiDxS42"
                    defaultMessage="Calculate Cost"
                    description="Calculate Cost"
                  />
                </Button>
              </DashboardCard.Content>
            </>
          )}
        </>
      )}
    </DashboardCard>
  );
};
