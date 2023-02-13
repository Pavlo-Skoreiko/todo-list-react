import { toAuthor, toTasks } from "../routes";
import { List, StyledNavLink, Item } from "./styled";

const Navigation = () => (
  <nav>
    <List>
      <Item>
        <StyledNavLink exact to={toTasks()}>
          Zadania
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink exact to={toAuthor()}>
          O autorze
        </StyledNavLink>
      </Item>
    </List>
  </nav>
);

export default Navigation;
