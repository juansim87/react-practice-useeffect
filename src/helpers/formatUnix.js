export const formatUnix = (ts) => {
	const date = new Date(ts * 1000);
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");

	return `${hours}:${minutes}`;
};
