'use client'
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function NestedList({
    children,
  }: {
    children: React.ReactNode;
  })  {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number,
    ) => {
      setSelectedIndex(index);
    };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, maxHeight: 400, overflow: 'auto', bgcolor: 'background.paper', textAlign:'center' }}
      component="nav"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Uploaded Files
        </ListSubheader>
      }
    >
      
      

            <>{children}</>
        </List>
   
  
  );
}