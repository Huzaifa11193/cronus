import * as React from "react";
import {
  Box,
  Card,
  CardHeader,
  Grid,
  Chip,
  Badge,
  IconButton,
  Typography,
  CardContent,
  CardActions,
  Avatar,
} from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { styled } from "@mui/system";


const Title = styled("div")(() => ({
  marginBottom: "1.5px",
  color: "#666666",
}));

const SubTitle = styled("span")(() => ({
  marginBottom: "1.5px",
  color: "#333333",
  fontWeight: "bold",
}));
const Heading = styled("div")(() => ({
  color: "#333333",
  fontWeight: "bold",
  fontSize: "16px",
}));

const rightIconAction = (
  <>
    <Badge
      badgeContent={4}
      color="error"
      sx={{
        "& .MuiBadge-badge": {
          right: "1.8px",
          top: "0.5px",
        },
      }}
    >
      <NotificationsNoneIcon color="action" />
    </Badge>
    <IconButton>
      <MoreVertIcon />
    </IconButton>
  </>
);

const TaskCard = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card sx={{ minWidth: 275, m: "8px 1px",paddingTop: "8px" }}>
            
            <CardContent sx={{ p: "0 16px" }}>
              <Heading>{item.assigned_To}</Heading>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {item.task}
              </Typography>
              
            </CardContent>
            <CardActions>
              
            </CardActions>
          </Card>
        </div>
      )}
    </Draggable>
  );
};
export default TaskCard;