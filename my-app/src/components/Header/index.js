import { DivHeader } from "./style";

const Header = () => {
  return (
    <>
      {1 < 10 ? (
        <DivHeader>
          <h2>BEM-VINDO AO ECONOQUIZ</h2>
        </DivHeader>
      ) : (
        <>
          <DivHeader>
            <h2>NÍVEL: EASY</h2>
            <h4>name</h4>
          </DivHeader>
          {/* <DivHeader>
            <h2>TOTAL 6 DE 10</h2>
            <h4>name</h4>
          </DivHeader> */}
        </>
      )}
    </>
  );
};

export default Header;