import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  filterRoot: {
    justifyContent: 'space-between'
  },
  filterGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  filterButton: {
    display: 'flex',
    flexDirection: 'column'
  },
  formControl: {
    width: '450px'
  },
  inputLabel: {
    backgroundColor: 'white'
  }

}))

export default function Filters(props) {
  const classes = useStyles()

  const router = useRouter()
  const { cat: category } = router.query

  const { type } = props

  const [selectedEngagement, setSelectedEngagement] = React.useState(category || '')
  const [textSearch, setTextSearch] = React.useState('')

  function buildEngagements() {
    const engagements = [
      'None', 'Product Design & Dev Practices', 'Technology Standards',
      'Industry Advocacy and Education', 'Tools/Infrastructure/Services Development for B-s',
      'Tools Development for Me-s', 'Product Testing', 'Org Compliance and Testing',
      'Regulation, Legal, Policy', 'Consumer Advocacy and Education', 'Other'
    ]

    return engagements.map((engagement) => {
      if (engagement === 'None') {
        return (
          <MenuItem value="" key="menu-item-activity-none">
            <em>None</em>
          </MenuItem>
        )
      }
      return (
        <MenuItem value={engagement} key={`menu-item-activity-${engagement}`}>
          {engagement}
        </MenuItem>
      )
    })
  }

  const handleEngagementSelect = (event) => {
    setSelectedEngagement(event.target.value)
    router.push({ pathname: '/organizations', query: { cat: event.target.value } })
  }

  const handleTextSearchChange = (event) => {
    setTextSearch(event.target.value)
  }

  function buildfilters() {
    if (type === 'Organization') {
      return (
        <>
          <Grid item xs={12} md>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel className={classes.inputLabel} id="engagement-select-label">Select a Category</InputLabel>
              <Select
                labelId="engagement-select-label"
                id="engagement-select"
                value={selectedEngagement}
                onChange={handleEngagementSelect}
              >
                {buildEngagements()}
              </Select>
            </FormControl>
          </Grid>
        </>
      )
    }
    return (
      <>
        <Grid item xs={12} md />
      </>
    )
  }

  return (
    <div className={classes.filterRoot}>
      <Grid className={classes.filterGrid} container spacing={4}>
        {buildfilters(type)}
      </Grid>
    </div>
  )
}

Filters.propTypes = {
  type: PropTypes.string,
}
