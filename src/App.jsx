import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
const App = () => {
    return (
        <>
            <h1 className="text-yellow-300">Hello</h1>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <ButtonGradient />
                <Button className="mt-20">Something</Button>
            </div>
        </>
    );
};

export default App;
