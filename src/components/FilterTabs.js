import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { FILTRATION_TYPES, updateFilter } from "../Redux/slices/todos.slice";

const FilterTabs = () => {
  const { filter, todos } = useSelector((state) => state.todosState);

  const dispatch = useDispatch();
  const handleFilterChange = (filter) => {
    dispatch(updateFilter(filter));
  };

  if (todos.length === 0) return null;
  
  return (
    <>
      <View style={styles.dividerLine} />

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={{
            ...styles.filterBtn,
            ...(filter === FILTRATION_TYPES.ALL
              ? styles.activeFilterBtn
              : null),
          }}
          activeOpacity={0.7}
          onPress={() => handleFilterChange(FILTRATION_TYPES.ALL)}
        >
          <Text
            style={{
              ...styles.filterText,
              ...(filter === FILTRATION_TYPES.ALL
                ? styles.activeFilterText
                : null),
            }}
          >
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.filterBtn,
            ...(filter === FILTRATION_TYPES.COMPLETED
              ? styles.activeFilterBtn
              : null),
          }}
          activeOpacity={0.7}
          onPress={() => handleFilterChange(FILTRATION_TYPES.COMPLETED)}
        >
          <Text
            style={{
              ...styles.filterText,
              ...(filter === FILTRATION_TYPES.COMPLETED
                ? styles.activeFilterText
                : null),
            }}
          >
            Completed
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.filterBtn,
            ...(filter === FILTRATION_TYPES.IN_PROGRESS
              ? styles.activeFilterBtn
              : null),
          }}
          activeOpacity={0.7}
          onPress={() => handleFilterChange(FILTRATION_TYPES.IN_PROGRESS)}
        >
          <Text
            style={{
              ...styles.filterText,
              ...(filter === FILTRATION_TYPES.IN_PROGRESS
                ? styles.activeFilterText
                : null),
            }}
          >
            In Progress
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FilterTabs;
