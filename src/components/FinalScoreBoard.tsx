type FinalScoreBoardProps = {
  finalScore: number;
};

function FinalScoreBoard({ finalScore }: FinalScoreBoardProps): JSX.Element {
  const getVerbalResult = (finalScore: number): string => {
    if (finalScore > 80) return "Amazing";
    if (finalScore > 60) return "Great";
    if (finalScore > 40) return "Good";
    if (finalScore > 20) return "Poor";
    return "Dumb";
  };

  return (
    <div className="rounded-b-[2rem] bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue text-white p-6 flex flex-col items-center md:rounded-[2rem] md:self-stretch md:w-full md:max-w-sm md:z-10">
      <p className="text-lightLavender text-lg font-medium md:text-2xl md:font-bold">
        Your Result
      </p>
      <div className="relative my-6 bg-gradient-to-b from-violetBlue to-persianBlue rounded-full p-16 md:p-24 md:my-9">
        <span className="absolute top-[21%] right-[27%] md:top-[27%]">
          <p className="text-5xl font-bold md:text-7xl">{finalScore}</p>
          <p className="text-base whitespace-nowrap text-lightLavender md:text-center">
            of 100
          </p>
        </span>
      </div>
      <div className="text-center font-medium">
        <p className="pb-2 text-2xl md:text-3xl">
          {getVerbalResult(finalScore)}
        </p>
        <p className="text-lightLavender max-w-[33ch] md:max-w-[25ch]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

export default FinalScoreBoard;
