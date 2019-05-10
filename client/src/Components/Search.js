import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const suggestions = [ 
  { label: 'Children\'s and Family Services' },
  { label: 'Homeless Services' },
  { label: 'Youth Development, Shelter, and Crisis Services' },
  { label: 'Multipurpose Human Service Organizations' },
  { label: 'Food Banks, Food Pantries, and Food Distribution' },
  { label: 'Social Services' },
  { label: 'Scholarship and Financial Support' },
  { label: 'Private Liberal Arts Colleges' },
  { label: 'Youth Education Programs and Services' },
  { label: 'Education Policy and Reform' },
  { label: 'Other Education Programs and Services' },
  { label: 'Private Elementary & Secondary Schools' },
  { label: 'Universities, Graduate Schools, and Technological Institutes' },
  { label: 'Adult Education Programs and Services' },
  { label: 'Early Childhood Programs and Services' },
  { label: 'Special Education' },
  { label: 'International Peace, Security, and Affairs' },
  { label: 'Development and Relief Services' },
  { label: 'Humanitarian Relief Supplies' },
  { label: 'Foreign Charity Support Organizations' },
  { label: 'Advocacy and Education' },
  { label: 'Religious Media and Broadcasting' },
  { label: 'Religious Activities' },
  { label: 'Wildlife Conservation' },
  { label: 'Animal Rights, Welfare, and Services' },
  { label: 'Zoos and Aquariums' },
  { label: 'Libraries, Historical Societies and Landmark Preservation' },
  { label: 'Museums' },
  { label: 'Performing Arts' },
  { label: 'Public Broadcasting and Media' },
  { label: 'Botanical Gardens, Parks, and Nature Centers' },
  { label: 'Environmental Protection and Conservation' },
  { label: 'Patient and Family Support' },
  { label: 'Diseases, Disorders, and Disciplines' },
  { label: 'Treatment and Prevention Services' },
  { label: 'Medical Research' },
  { label: 'Community Foundations' },
  { label: 'Fundraising' },
  { label: 'Housing and Neighborhood Development' },
  { label: 'United Ways' },
  { label: 'Jewish Federations' },
  { label: 'Non-Medical Science & Technology Research' },
  { label: 'Social and Public Policy Research' } 
];

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) =>
          part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          ),
        )}
      </div>
    </MenuItem>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

const styles = theme => ({
  root: {
    height: '50px',
    width: '300px',
    flexGrow: 1,
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

class IntegrationAutosuggest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      single: '',
      popper: '',
      suggestions: [],
    }
  }

  getSuggestions(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
  
    return inputLength === 0
      ? []
      : suggestions.filter(suggestion => {
          const keep =
            count < 5 && suggestion.label.toLowerCase().includes(inputValue.toLowerCase());
  
          if (keep) {
            count += 1;
          }
  
          return keep;
        });
  }

  // componentDidMount() {
  //   this.setState({
  //     suggestions: this.props.topics
  //   })
  // }

  handleSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  }

  handleSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    });
  }

  handleChange(name) {
    return (event, {newValue}) => {
      this.setState({
        [name]: newValue,
      });
    }
  }

  render() {
    const { classes } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested.bind(this),
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested.bind(this),
      getSuggestionValue,
      renderSuggestion,
    };   

    return (
      <div>
        <div className={classes.searchIcon}>
          <SearchIcon onClick={() => {this.props.handleSearchSubmit(this.state.single)}}/>
        </div>
        <div className={classes.root}>
          <Autosuggest
            {...autosuggestProps}
            inputProps={{
              classes,
              placeholder: 'Search by topic',
              value: this.state.single,
              onChange: this.handleChange('single'),
            }}
            theme={{
              container: classes.container,
              suggestionsContainerOpen: classes.suggestionsContainerOpen,
              suggestionsList: classes.suggestionsList,
              suggestion: classes.suggestion,
            }}
            renderSuggestionsContainer={options => (
              <Paper {...options.containerProps} square>
                {options.children}
              </Paper>
            )}
          />
        </div>
      </div>
    );
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntegrationAutosuggest);