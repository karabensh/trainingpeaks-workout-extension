export const BLOCK_TYPES = Object.freeze({
    WARMUP: "Warm up",
    ACTIVE: "Active",
    RECOVERY: "Recovery",
    COOLDOWN: "Cool down",
    TWO_STEP_REPEATS: "Two Step Repeats",
    THREE_STEP_REPEATS: "Three Step Repeats",
    RAMP_UP: "Ramp Up",
    RAMP_DOWN: "Ramp Down",
});

export const BLOCK_TYPE_VALUES = Object.values(BLOCK_TYPES);

export function isValidBlockType(value) {
    return BLOCK_TYPE_VALUES.includes(value);
}

export const BLOCK_TYPE_LIST = Object.freeze([
	BLOCK_TYPES.WARMUP,
	BLOCK_TYPES.ACTIVE,
	BLOCK_TYPES.RECOVERY,
	BLOCK_TYPES.COOLDOWN,
	BLOCK_TYPES.TWO_STEP_REPEATS,
	BLOCK_TYPES.THREE_STEP_REPEATS,
	BLOCK_TYPES.RAMP_UP,
	BLOCK_TYPES.RAMP_DOWN,
]);
