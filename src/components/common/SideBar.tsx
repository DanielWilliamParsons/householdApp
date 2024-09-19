import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, ListItemButton, Toolbar } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail'

interface SidebarProps {
    drawerWidth: number,
    mobileOpen: boolean,
    handleDrawerTransitionEnd: () => void,
    handleDrawerClose: () => void
}
// Can use either interface or type
// type SidebarProps = {
//     drawerWidth: number,
//     mobileOpen: boolean,
//     handleDrawerTransitionEnd: () => void,
//     handleDrawerClose: () => void
// }

const SideBar = ({drawerWidth, mobileOpen, handleDrawerTransitionEnd, handleDrawerClose}:SidebarProps) => {
    
    const drawer = (
        <div>
          <Toolbar />
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      );
    
    return(
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* For mobile */}
        <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            {drawer}
        </Drawer>

        {/* For PC */}
        <Drawer
            variant="permanent"
            sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
        >
            {drawer}
        </Drawer>
    </Box>
    )
}

export default SideBar;