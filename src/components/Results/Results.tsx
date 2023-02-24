import { Card, Paper, SimpleGrid, Text, Title } from "@mantine/core";
import dayjs from "dayjs";

interface ResultsProps {
  lastPeriod: Date;
  cycleLength: number;
}

const Results = ({ lastPeriod, cycleLength }: ResultsProps) => {
  // Ovulation Date, is 14 days before start menstruation.
  const ovulationCalc = cycleLength - 14;
  const ovulationDate = dayjs(lastPeriod).add(ovulationCalc, "day");

  // Period fertility it's   -3days  ovulationDate  +1 days.
  const fertilityPeriod = `${dayjs(ovulationDate)
    .subtract(4, "day")
    .format("LL")} - ${dayjs(ovulationDate).add(1, "day").format("LL")}`;

  const nextPeriod = dayjs(lastPeriod).add(cycleLength, "day").format("LL");
  return (
    <Paper>
      {lastPeriod && cycleLength > 0 ? (
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 860, cols: 1, verticalSpacing: 32 },
          ]}
        >
          <Card withBorder radius="md" bg="grape">
            <Card.Section p={8} withBorder bg="#6c257d">
              <Text>Fertile Window</Text>
            </Card.Section>
            <Title order={4} pt={"md"} color="white">
              {fertilityPeriod}
            </Title>
          </Card>

          <Card withBorder radius="md" bg="grape">
            <Card.Section p={8} withBorder bg="#6c257d">
              <Text>Ovulation Date</Text>
            </Card.Section>
            <Title order={4} pt={"md"} color="white">
              {ovulationDate.format("LL")}
            </Title>
          </Card>

          <Card withBorder radius="md" bg="grape">
            <Card.Section p={8} withBorder bg="#6c257d">
              <Text>Next Yepyep Date</Text>
            </Card.Section>
            <Title order={4} pt={"md"} color="white">
              {nextPeriod}
            </Title>
          </Card>
        </SimpleGrid>
      ) : (
        <Card>Results</Card>
      )}
    </Paper>
  );
};

export default Results;
