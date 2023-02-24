import { Flex, SimpleGrid, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import CycleLength from "../components/CycleLength";
import LastPeriod from "../components/LastPeriod";
import Results from "../components/Results";

export interface CycleForm {
  lastPeriod: Date | null;
  cycleLength: number | null;
}

const Home = () => {
  const form = useForm<CycleForm>({
    initialValues: {
      lastPeriod: null,
      cycleLength: null,
    },
    validate: {
      lastPeriod: (value) => value !== null,
      cycleLength: (value) => value !== null && value > 0,
    },
  });

  return (
    <div>
      <Title color="grape" order={3}>
        Ovulation Calculator
      </Title>
      <h2>Determine Darling's Ovulation Cycle</h2>
      <p>Calculate your ovulate day, and identifying your most fertile days.</p>
      <Flex direction="column" gap={32}>
        <SimpleGrid
          cols={2}
          spacing={96}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: 32 },
            { maxWidth: 860, cols: 1, verticalSpacing: "xl" },
          ]}
        >
          <LastPeriod form={form} />
          <CycleLength form={form} />
        </SimpleGrid>

        <Results
          lastPeriod={form.getInputProps("lastPeriod").value}
          cycleLength={form.getInputProps("cycleLength").value}
        />
      </Flex>
    </div>
  );
};

export default Home;
