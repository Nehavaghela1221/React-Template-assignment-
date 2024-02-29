import * as React from 'react';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

import Stack from '@mui/material/Stack';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
function Nav2() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light "  >
        <a className="navbar-brand" href="#">
          <img src="https://th.bing.com/th/id/OIP.LVoQcYBwZrgqn5iIxGisywHaH0?w=199&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7" width={30} height={30} alt />
        </a>

        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        < a className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>

            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </a>

        



    <Stack direction="row" spacing={3} alignItems="flex-end">
     
      <HomeIcon fontSize="large" />
      <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
    </Stack>
      </nav>

    </div>
  )
}

export default Nav2