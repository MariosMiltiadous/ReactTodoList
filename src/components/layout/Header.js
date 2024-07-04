import { withTheme } from "../hocs/withTheme";
import {UserNameContext} from '../../contexts/UserNameContext';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Avatar from '@mui/material/Avatar';

const Header = ({ layoutVersion, darkTheme, toggleTheme }) => {

  const { name } = useContext(UserNameContext);

  return (
    <header>
       <Avatar>{ name } </Avatar>
      <span className="nav-item">
        <input
          type="checkbox"
          checked={darkTheme === true}
          className="theme-toggle-checkbox"
          autoComplete="off"
          id="toggleThemeId"
          onChange={() => {
            toggleTheme();
          }}
        />
        <label htmlFor="toggleThemeId" className="theme-toggle-checkbox-label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
        <span>{layoutVersion}</span>
      </span>
    </header>
  );
};

export default withTheme(Header);
