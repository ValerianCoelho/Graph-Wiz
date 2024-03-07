import { Stack, Typography } from '@mui/material';

function PropertyLabel(props: any) {
  return (
    <Stack direction={'row'} sx={{border: '1px solid rgba(0, 0, 0, .2)'}} borderRadius={1}>
      <Typography minWidth={'70%'} borderRight={'1px solid rgba(0, 0, 0, .5)'} p={.5} pl={1}>{props.property}</Typography>
      <Typography p={.5} mx={'auto'}>{props.value == undefined ? 'Undefined' : props.value}</Typography>
    </Stack>
  )
}

export default PropertyLabel;