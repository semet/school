declare module "common" {
	import type {
		Batch,
		Category,
		ClassRoom,
		Department,
		Headmaster,
		Lesson,
		Post,
		PostComment,
		PostImage,
		Prisma,
		SpecialProgram,
		Student,
		Teacher,
		User,
		Year,
	} from "@prisma/client";

	type TeacherWithDetails = Teacher & {
		lesson: Lesson;
		batch: Batch;
		department: Department;
		specialProgram: SpecialProgram;
	};

	type HeadmasterWithDetails = Headmaster & {
		department: Department;
	};
	type StudentWithDetails = Student & {
		year: Year;
		classRoom: ClassRoom;
	};

	type CategoryWithDetails = Category & {
		posts: Post[];
		_count: Prisma.CategoryCountOutputType;
	};

	type PostWithDetails = Post & {
		category: Category;
		comments: PostComment[];
		images: PostImage[];
		_count: Prisma.PostCountOutputType;
	};

	type PostCommentWithDetails = PostComment & {
		user: User;
	};
}
