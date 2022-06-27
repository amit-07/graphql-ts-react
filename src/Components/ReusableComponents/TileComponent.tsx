import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import CreateNewFolder from '@mui/icons-material/CreateNewFolder';

import {Country, Continent} from "../../app-interfaces";

const TileComponent:React.FC<{data: Country | Continent}> = ({data}) => {
  return (
    <Card
      sx={{
        bgcolor: 'initial',
        boxShadow: 'none',
        '--Card-padding': '0px',
      }}
      className="item"
    >
      <Box sx={{ position: 'relative' }}>
        <AspectRatio ratio="4/3">
          <figure>
            <img
              alt="Yosemite by Casey Horner"
              width="330"
              height="247"
              sizes="338px"
              data-sizes="auto"
              data-srcset="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?crop=entropy&auto=format&fit=crop&w=988"
              data-src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?crop=entropy&auto=format&fit=crop&w=988"
              src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?crop=entropy&auto=format&fit=crop&w=988"
              srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?crop=entropy&auto=format&fit=crop&w=988"
            />
          </figure>
        </AspectRatio>
        <CardCover
          className="gradient-cover"
          sx={{
            '&:hover, &:focus-within': {
              opacity: 1,
            },
            opacity: 0,
            transition: '0.1s ease-in',
            background:
              'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
          }}
        >
          {/* The first box acts as a container that inherits style from the CardCover */}
          <Box>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                flexGrow: 1,
                alignSelf: 'flex-end',
              }}
            >
              <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                <Link
                  href=""
                  overlay
                  underline="none"
                  sx={{
                    color: '#fff',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: 'block',
                  }}
                >
                  {data.name}
                </Link>
              </Typography>
              <IconButton size="sm" color="neutral" sx={{ ml: 'auto' }}>
                <CreateNewFolder />
              </IconButton>
              <IconButton size="sm" color="neutral">
                <Favorite />
              </IconButton>
            </Box>
          </Box>
        </CardCover>
      </Box>
    </Card>
  );
}

export default TileComponent;
