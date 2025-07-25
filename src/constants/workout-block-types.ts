export const BLOCK_TYPES = {
	WARMUP: "Warm up",
	ACTIVE: "Active",
	RECOVERY: "Recovery",
	COOLDOWN: "Cool down",
	TWO_STEP_REPEATS: "Two Step Repeats",
	THREE_STEP_REPEATS: "Three Step Repeats",
	RAMP_UP: "Ramp Up",
	RAMP_DOWN: "Ramp Down",
} as const;

// Derive the string literal union type from the values of BLOCK_TYPES
export type BlockType = typeof BLOCK_TYPES[keyof typeof BLOCK_TYPES];

export const BLOCK_TYPE_VALUES: BlockType[] = Object.values(BLOCK_TYPES);

export function isValidBlockType(value: unknown): value is BlockType {
	return BLOCK_TYPE_VALUES.includes(value as BlockType);
}

export const BLOCK_TYPE_LIST: BlockType[] = [
	BLOCK_TYPES.WARMUP,
	BLOCK_TYPES.ACTIVE,
	BLOCK_TYPES.RECOVERY,
	BLOCK_TYPES.COOLDOWN,
	BLOCK_TYPES.TWO_STEP_REPEATS,
	BLOCK_TYPES.THREE_STEP_REPEATS,
	BLOCK_TYPES.RAMP_UP,
	BLOCK_TYPES.RAMP_DOWN,
];



// return (BLOCK_TYPE_VALUES as readonly string[]).includes(value);
// }
// export type BlockType =
// 	| "Warm up"
// 	| "Active"
// 	| "Recovery"
// 	| "Cool down"
// 	| "Two Step Repeats"
// 	| "Three Step Repeats"
// 	| "Ramp Up"
// 	| "Ramp Down";

// // Path 1: Accept only BlockType (type-safe)
// export function isValidBlockTypeStrict(value: BlockType): boolean {
// 	return BLOCK_TYPE_VALUES.includes(value);
// }

// // Path 2: Accept string, check at runtime (less type-safe)
// export function isValidBlockTypeLoose(value: string): value is BlockType {
// 	return BLOCK_TYPE_VALUES.includes(value as BlockType);
// }
