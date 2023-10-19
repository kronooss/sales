import TableRowLink from "@dashboard/components/TableRowLink";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@saleor/macaw-ui";
import {
  Box,
  Button,
  ChervonDownIcon,
  ChervonUpIcon,
  Text,
  PlusIcon,
  vars,
  TrashBinIcon,
} from "@saleor/macaw-ui/next";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { DashboardCard } from "../Card";
import Skeleton from "../Skeleton";
import { nameInputPrefix, nameSeparator, valueInputPrefix } from "./utils";

const useStyles = makeStyles(
  theme => ({
    input: {
      padding: theme.spacing(0.5, 2),
    },
    nameInput: {
      padding: "13px 16px",
    },
  }),
  {
    name: "Package",
  },
);

export interface PackageCardProps {
  data: any[];
  packageType: string;
  onPackageChange: (event: React.ChangeEvent<any>, id) => void;
  onChangeWT: (event: React.ChangeEvent<any>, id) => void;
  onChangeL: (event: React.ChangeEvent<any>, id) => void;
  onChangeW: (event: React.ChangeEvent<any>, id) => void;
  onChangeH: (event: React.ChangeEvent<any>, id) => void;
  onAddPackage: () => void;
  onRemovePackage: (id) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  data,
  packageType,
  onPackageChange,
  onChangeWT,
  onChangeL,
  onChangeW,
  onChangeH,
  onAddPackage,
  onRemovePackage,
}) => {
  const intl = useIntl();
  const [expanded, setExpanded] = React.useState(true);
  const classes = useStyles();
  
  return (
    <DashboardCard
      data-test-id="metadata-editor"
      data-test-expanded={expanded}
      gap={1}
    >
      <DashboardCard.Title>
        <Box
          display="flex"
          justifyContent="space-between"
          onClick={() => setExpanded(!expanded)}
          cursor="pointer"
        >
          {
            intl.formatMessage({
              id: "VcI+Zh1",
              defaultMessage: "Packages(s):",
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
                      defaultMessage="No package created for this element. Use the button below to add new package field."
                      description="empty package text"
                    />
                  </Text>
                </DashboardCard.Content>
              ) : (
                <Table>
                  <TableHead>
                    <TableRowLink>
                      <TableCell style={{ paddingRight: vars.spacing[2], width: '80px' }}>
                        <Text variant="caption" color="textNeutralSubdued">
                          <FormattedMessage
                            id="nudPsY1"
                            defaultMessage="No. of Packages(Max. 25)"
                            description="No. of Packages(Max. 25)"
                          />
                        </Text>
                      </TableCell>
                      <TableCell style={{ paddingLeft: vars.spacing[3], paddingRight: vars.spacing[3] }}>
                        <Text variant="caption" color="textNeutralSubdued">
                          <FormattedMessage
                            id="LkuDEb1"
                            defaultMessage="Box Name"
                            description="Box Name"
                          />
                        </Text>
                      </TableCell>
                      <TableCell style={{ paddingLeft: vars.spacing[3], paddingRight: vars.spacing[3] }}>
                        <Text variant="caption" color="textNeutralSubdued">
                          <FormattedMessage
                            id="LkuDEb2"
                            defaultMessage="Wt.(lbs)"
                            description="Wt.(lbs)"
                          />
                        </Text>
                      </TableCell>
                      <TableCell style={{ paddingLeft: vars.spacing[3], paddingRight: vars.spacing[3] }}>
                        <Text variant="caption" color="textNeutralSubdued">
                          <FormattedMessage
                            id="LkuDEb2"
                            defaultMessage="L(in)"
                            description="L(in)"
                          />
                        </Text>
                      </TableCell>
                      <TableCell style={{ paddingLeft: vars.spacing[3], paddingRight: vars.spacing[3] }}>
                        <Text variant="caption" color="textNeutralSubdued">
                          <FormattedMessage
                            id="LkuDEb3"
                            defaultMessage="W(in)"
                            description="W(in)"
                          />
                        </Text>
                      </TableCell>
                      <TableCell style={{ paddingLeft: vars.spacing[3], paddingRight: vars.spacing[3] }}>
                        <Text variant="caption" color="textNeutralSubdued">
                          <FormattedMessage
                            id="LkuDEb4"
                            defaultMessage="H(in)"
                            description="H(in)"
                          />
                        </Text>
                      </TableCell>
                      <TableCell style={{ paddingLeft: vars.spacing[3] }}>
                        <Text variant="caption" color="textNeutralSubdued">
                          <FormattedMessage
                            id="LkuDEb5"
                            defaultMessage="Remove"
                            description="Remove"
                          />
                        </Text>
                      </TableCell>
                    </TableRowLink>
                  </TableHead>
                  <TableBody>
                    {data.map((field, fieldIndex) => (
                      <TableRowLink data-test-id="field" key={fieldIndex}>
                        <TableCell style={{ paddingRight: vars.spacing[2] }}>
                          <TextField
                            InputProps={{
                              classes: {
                                input: classes.nameInput,
                              },
                            }}
                            inputProps={{
                              "aria-label": `${nameInputPrefix}${nameSeparator}${fieldIndex}`,
                            }}
                            name={`${nameInputPrefix}${nameSeparator}${fieldIndex}`}
                            fullWidth
                            value={field.quantity}
                            onChange={(event) => onPackageChange(event, field.id)}
                          />
                        </TableCell>
                        <TableCell style={{ paddingLeft: vars.spacing[3], paddingRight: vars.spacing[3] }}>
                          <TextField
                            value={packageType}
                            disabled
                          />
                        </TableCell>
                        <TableCell style={{ paddingLeft: vars.spacing[3], paddingRight: vars.spacing[3] }}>
                          <TextField
                            InputProps={{
                              classes: {
                                root: classes.input,
                              },
                            }}
                            inputProps={{
                              "aria-label": `${valueInputPrefix}${nameSeparator}${fieldIndex}`,
                            }}
                            multiline
                            name={`${valueInputPrefix}${nameSeparator}${fieldIndex}`}
                            fullWidth
                            value={field.weight_value}
                            onChange={(event) => onChangeWT(event, field.id)}
                          />
                        </TableCell>
                        <TableCell style={{ paddingLeft: vars.spacing[3], paddingRight: vars.spacing[3] }}>
                          <TextField
                            InputProps={{
                              classes: {
                                root: classes.input,
                              },
                            }}
                            inputProps={{
                              "aria-label": `${valueInputPrefix}${nameSeparator}${fieldIndex}`,
                            }}
                            multiline
                            name={`${valueInputPrefix}${nameSeparator}${fieldIndex}`}
                            fullWidth
                            value={field.length}
                            onChange={(event) => onChangeL(event, field.id)}
                          />
                        </TableCell>
                        <TableCell style={{ paddingLeft: vars.spacing[3], paddingRight: vars.spacing[3] }}>
                          <TextField
                            InputProps={{
                              classes: {
                                root: classes.input,
                              },
                            }}
                            inputProps={{
                              "aria-label": `${valueInputPrefix}${nameSeparator}${fieldIndex}`,
                            }}
                            multiline
                            name={`${valueInputPrefix}${nameSeparator}${fieldIndex}`}
                            fullWidth
                            value={field.width}
                            onChange={(event) => onChangeW(event, field.id)}
                          />
                        </TableCell>
                        <TableCell style={{ paddingLeft: vars.spacing[3], paddingRight: vars.spacing[3] }}>
                          <TextField
                            InputProps={{
                              classes: {
                                root: classes.input,
                              },
                            }}
                            inputProps={{
                              "aria-label": `${valueInputPrefix}${nameSeparator}${fieldIndex}`,
                            }}
                            multiline
                            name={`${valueInputPrefix}${nameSeparator}${fieldIndex}`}
                            fullWidth
                            value={field.height}
                            onChange={(event) => onChangeH(event, field.id)}
                          />
                        </TableCell>
                        <TableCell style={{ paddingLeft: vars.spacing[3] }}>
                          <Box display="flex" justifyContent="flex-end">
                            <Button
                              variant="secondary"
                              data-test-id="add-field"
                              type="button"
                              onClick={() => onRemovePackage(field.id)}
                              icon={<TrashBinIcon />}
                            />
                          </Box>
                        </TableCell>
                      </TableRowLink>
                    ))}
                  </TableBody>
                </Table>
              )}
            </>
          )}
        </>
      )}
      <DashboardCard.Content marginTop={2} paddingLeft={6}>
        <Button
          variant="secondary"
          data-test-id="add-field"
          type="button"
          onClick={onAddPackage}
          icon={<PlusIcon />}
        >
          <FormattedMessage
            id="GiDxS41"
            defaultMessage="Add Package"
            description="Add Package"
          />
        </Button>
      </DashboardCard.Content>
    </DashboardCard>
  );
};
